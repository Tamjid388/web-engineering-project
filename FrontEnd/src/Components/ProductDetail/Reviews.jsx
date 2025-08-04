import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Authcontext } from "../../AuthProvider/Authprovider.jsx";

export const Reviews = ({ product }) => {
  const { user } = useContext(Authcontext);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [openForm, setOpenForm] = useState(false); // Toggle form visibility

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

    try {
      const reviewData = {
        user_id: Number(user.uid) || 1,
        product_id: product.id,
        rating: Number(rating),
        comment: comment.trim(),
      };

      const res = await axios.post(
        "http://localhost/fitflex-backend/api/add_review.php",
        reviewData
      );

      if (res.data.status === "success") {
        Swal.fire("Success", "Review submitted!", "success");
        setReviews((prev) => [
          ...prev,
          {
            user_id: reviewData.user_id,
            rating: reviewData.rating,
            comment: reviewData.comment,
            name: user.displayName || user.email,
          },
        ]);
        setRating(5);
        setComment("");
        setOpenForm(false); // Close the form
      } else {
        Swal.fire("Error", res.data.message || "Failed to submit review.", "error");
      }
    } catch (err) {
      console.error("Submit Review Error:", err.message);
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>

      {user && (
        <button
          onClick={() => setOpenForm(!openForm)}
          className="btn btn-outline btn-primary mb-4"
        >
          {openForm ? "Cancel" : "Write a Review"}
        </button>
      )}

      {openForm && (
        <form onSubmit={handleReviewSubmit} className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Rating (1–5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit Review
          </button>
        </form>
      )}

      {!user && (
        <p className="mb-6">
          Please <a href="/login" className="text-blue-600 underline">log in</a> to write a review.
        </p>
      )}

      <div>
        {reviews.length === 0 && <p>No reviews yet.</p>}
        {reviews.map((rev, idx) => (
          <div key={idx} className="border p-4 mb-3 rounded">
            <p className="font-semibold">{rev.name || `User ${rev.user_id}`}</p>
            <p>Rating: {rev.rating}</p>
            <p>{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
