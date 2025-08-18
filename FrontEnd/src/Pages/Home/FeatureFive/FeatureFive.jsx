import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureFive = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_products.php")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch collections", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading collections...</p>;

  return (
    <section className="container mx-auto">
      <div className="text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          Explore Our World
        </p>
        <h2 className="text-4xl font-extrabold mb-12">New Collections</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {collections.slice(0, 4).map((item, index) => (
            <Link
              key={item.id || index}
              to={`/shop/product-details/${item.id}`}  // Adjust path as needed
              className="relative group overflow-hidden bg-[#f0f0f0] rounded-2xl border border-gray-200 shadow transition-transform duration-300 hover:-translate-y-2 block"
            >
              {/* Use product's main image */}
              <img
                src={item.image}
                alt={item.name || item.title}
                className="w-full h-[500px] object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Info */}
              <div className="absolute bottom-20 left-6 text-left">
                <p className="text-xs uppercase text-gray-500">{item.brand}</p>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  {item.name}
                </h3>
              </div>

              {/* Hover Button */}
              <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white px-6 py-5 flex items-center justify-between border-t rounded-b-2xl">
                <span className="text-sm md:text-base font-semibold uppercase tracking-wide">
                  Explore Collection
                </span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureFive;
