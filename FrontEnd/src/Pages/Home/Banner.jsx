import img from "../../assets/H6-rev-img-1-1.png";

const Banner = () => {


  return (
    <div>
      <section className="w-full bg-[#eeedeb]  grid lg:grid-cols-2 grid-cols-1 mx-auto px-10 py-10 gap-10 items-center">
        {/* Text Section */}
        <div className="">
          <h1 className="lg:text-5xl text-3xl font-bold text-gray-900 leading-tight">
            DISCOVER YOUR <br />
            <span className="text-black">SPORTY EDGE</span>
          </h1>
          <p className="text-gray-500 mt-6 text-lg">
            Get the best sports apparel with the best offer that you can afford.
            Available for worldwide shipping and free delivery order.
          </p>
          <button className="btn bg-red-500 text-white mt-6 px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300">
            SHOP NOW
          </button>
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
