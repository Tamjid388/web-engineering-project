
import { Link } from "react-router";
import img from "../../assets/H6-rev-img-1-1.png";
import { Shield, Truck } from "lucide-react";

const Banner = () => {


  return (
    <div className="w-full bg-[#eeedeb]">
      <section className="container   grid lg:grid-cols-2 grid-cols-1 mx-auto px-6 md:px-10 py-10 gap-10 items-center">
        {/* Text Section */}
        <div className="">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
            DISCOVER YOUR <br />
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
             bg-clip-text
             text-transparent">SPORTY EDGE</span>
          </h1>
          <p className="mt-2 md:mt-6 text-xl lg:text-2xl text-slate-600">
            Get the best sports apparel with the best offer that you can afford.
            Available for worldwide shipping and free delivery order.
          </p>
            {/* Features */}
            <div className="flex flex-wrap gap-2 md:gap-6 text-sm text-slate-600 my-4 md:my-6">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Quality Guarantee</span>
              </div>
            </div>

          {/* buttons */}
          <Link to={'/shop'}
          className="btn md:btn-lg bg-red-500 text-white mt-2 md:mt-6
            rounded-lg hover:bg-red-600 transition duration-300">
            SHOP NOW
          </Link>
        </div>

        {/* Image Section */}
        <div className="">
         
          <img
            src={img}
            alt="Sporty Shoes"
            className="relative z-10 w-full h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
