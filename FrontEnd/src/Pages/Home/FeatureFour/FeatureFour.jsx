import img from "../../../assets/6_cc9e926f-60c0-4686-b487-7035dbce10e8_480x480-removebg-preview.PNG"

const FeatureFour = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24  bg-[#f0f0f0]">
        {/* Left Image */}
        <div className="w-full  flex justify-center mb-10 lg:mb-0">
          <img
            src={img} // Replace with your actual image path
            alt="Nike Air Shoe"
            className="max-w-full object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-xs uppercase text-gray-500 mb-2">
            Going Out On The Street
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            The Ultimate <br />
            Street Vibe
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit elementum,
            esue eget masa ac urna finibus fringilla nonpon mauris sit amet nisl
            in nunc pharetra.
          </p>
          <button className="border border-black text-black px-6 py-3 font-semibold hover:bg-black hover:text-white transition">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeatureFour;
