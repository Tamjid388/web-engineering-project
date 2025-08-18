import Marquee from "react-fast-marquee";
import { Megaphone } from "lucide-react";

const Headline = () => {
  return (
    <div className="bg-black text-white py-3 px-4 flex items-center gap-3">
      {/* Icon */}
      <Megaphone size={24} className="text-yellow-400 animate-pulse" />

      {/* Marquee */}
      <Marquee
        className="font-semibold uppercase text-sm sm:text-base md:text-lg tracking-wide"
        speed={60}
        gradient={false}
        pauseOnHover
      >
        🎉 Free Shipping on All Orders   |   🚚 Next-Day Delivery Available   |   💸 10% OFF Your First Order   |   🔁 Easy 7-Day Returns   |   🛍️ Limited Stock Available   |   💳 Buy Now, Pay Later   |   🎁 Free Gift With Every Purchase   |   ✨ New Arrivals Just Dropped!

      </Marquee>
    </div>
  );
};

export default Headline;
