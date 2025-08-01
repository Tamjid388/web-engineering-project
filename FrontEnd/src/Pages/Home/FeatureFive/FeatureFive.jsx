import { ArrowRight } from "lucide-react";
import img1 from "../../../assets/whiteTshirts_seyw02-removebg-preview.png";
import img2 from "../../../assets/shop-list-sidebar-35-removebg-preview.png";
import img3 from "../../../assets/grayBagpack_hj7okz-removebg-preview.png";

const FeatureFive = () => {
  const collections = [
    {
      brand: "Adidas",
      title: "Black Running Jacket",
      img: img2,
    },
    {
      brand: "Adidas",
      title: "Unisex Training T-Shirt",
      img: img1,
    },
    {
      brand: "Nike",
      title: "Urban Gray Backpack",
      img: img3,
    },
  ];

  return (
    <section className="my-16  text-center">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
        Explore Our World
      </p>
      <h2 className="text-4xl font-extrabold mb-12">New Collections</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-7xl mx-auto">
        {collections.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden bg-[#f0f0f0] rounded-2xl border border-gray-200 shadow transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Image with scale effect */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[500px] object-contain transition-transform duration-500 group-hover:scale-105"
            />

            {/* Bottom Info */}
            <div className="absolute bottom-20 left-6 text-left">
              <p className="text-xs uppercase text-gray-500">{item.brand}</p>
              <h3 className="text-xl md:text-2xl font-bold text-black">
                {item.title}
              </h3>
            </div>

            {/* Hover Button */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white px-6 py-5 flex items-center justify-between border-t rounded-b-2xl">
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide">
                Explore Collection
              </span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureFive;
