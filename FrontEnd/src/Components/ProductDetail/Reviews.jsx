import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Authcontext } from "../../AuthProvider/Authprovider.jsx";

export const Reviews = ({ product }) => {
  const { user } = useContext(Authcontext);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userReview, setUserReview] = useState(null); // Track user's existing review

  // Fetch reviews for the product
  useEffect(() => {
    const fetchReviews = async () => {
      if (!product?.id) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost/fitflex-backend/api/get_reviews.php?product_id=${product.id}`
        );
        if (res.data.status === "success") {
          const fetchedReviews = res.data.data || []; // Use 'data' as per backend
          setReviews(fetchedReviews);
          // Check if the logged-in user has a review
          if (user) {
            const existingReview = fetchedReviews.find(
              (rev) => rev.user_id === (Number(user.uid) || 1)
            );
            setUserReview(existingReview || null);
          }
          setError(null);
        } else {
          setError(res.data.message || "Failed to load reviews.");
        }
      } catch (err) {
        console.error("Error loading reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [product?.id, user]);

  // Handle review submission (create or update)
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire("Error", "Please sign in to post a review.", "error");
      return;
    }

    if (!comment.trim()) {
      Swal.fire("Error", "Please write a comment.", "error");
      return;
    }

    if (rating < 1 || rating > 5) {
      Swal.fire("Error", "Rating must be between 1 and 5.", "error");
      return;
    }

    setLoading(true);
    try {
      const reviewData = {
        user_id: Number(user.uid) || 1,
        product_id: product.id,
        rating: Number(rating),
        comment: comment.trim(),
      };

      const endpoint = userReview
        ? `http://localhost/fitflex-backend/api/update_review.php?id=${userReview.review_id}`
        : "http://localhost/fitflex-backend/api/add_review.php";

      const res = await axios.post(endpoint, reviewData);

      if (res.data.status === "success") {
        Swal.fire("Success", userReview ? "Review updated!" : "Review submitted!", "success");
        // Update reviews state
        if (userReview) {
          setReviews((prev) =>
            prev.map((rev) =>
              rev.review_id === userReview.review_id
                ? {
                    ...rev,
                    rating: reviewData.rating,
                    comment: reviewData.comment,
                    created_at: new Date().toLocaleDateString(),
                  }
                : rev
            )
          );
        } else {
          setReviews((prev) => [
            ...prev,
            {
              review_id: res.data.review_id || Date.now(),
              user_id: reviewData.user_id,
              rating: reviewData.rating,
              comment: reviewData.comment,
              user_name: user.displayName || user.email || "Anonymous User",
              created_at: new Date().toLocaleDateString(),
            },
          ]);
        }
        setUserReview({ ...reviewData, review_id: res.data.review_id || userReview?.review_id });
        setRating(5);
        setComment("");
        setOpenForm(false);
        setError(null);
      } else {
        Swal.fire("Error", res.data.message || "Failed to submit review.", "error");
      }
    } catch (err) {
      console.error("Submit Review Error:", err.message);
      Swal.fire("Error", "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      {/* Loading and Error States */}
      {loading && <p className="text-gray-600">Loading reviews...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Add/Edit Review Button */}
      {user && (
        <button
          onClick={() => setOpenForm(!openForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 disabled:bg-blue-300"
          disabled={loading}
        >
          {openForm ? "Cancel" : userReview ? "Edit Your Review" : "Add a Comment"}
        </button>
      )}

      {/* Review Form */}
      {openForm && (
        <form onSubmit={handleReviewSubmit} className="mb-6">
          <div className="mb-2">
            <textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
              disabled={loading}
            />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <label className="font-medium">Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-20 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : userReview ? "Update Review" : "Submit"}
          </button>
        </form>
      )}

      {/* Login Prompt */}
      {!user && (
        <p className="text-gray-600 mb-4">
          Please{" "}
          <a href="/login" className="text-blue-600 underline">
            log in
          </a>{" "}
          to write a review.
        </p>
      )}

      {/* User Review Notification */}
      {user && userReview && !openForm && (
        <p className="text-green-600 mb-4">You have already reviewed this product.</p>
      )}

      <hr className="mb-4" />

      {/* Reviews List */}
      <div>
        {reviews.length === 0 && !loading && !error && (
          <p className="text-gray-600">No reviews yet.</p>
        )}
        {reviews.map((rev) => (
          <div
            key={rev.review_id || rev.created_at || Date.now()}
            className="bg-gray-100 rounded p-4 mb-3 flex items-start gap-4"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl text-gray-600">
                👤
              </div>
            </div>
            <div>
              <p className="font-semibold">{rev.user_name || "Anonymous User"}</p>
              <p className="text-sm text-gray-500">
                {rev.created_at || new Date().toLocaleDateString()}
              </p>
              <p className="mt-1">{rev.comment}</p>
              <p className="text-sm text-yellow-600 mt-1">Rating: {rev.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};