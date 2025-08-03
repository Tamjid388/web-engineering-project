import img1 from "../../../assets/h4-clients-1.png";
import img2 from "../../../assets/h4-clients-2.png";
import img3 from "../../../assets/h4-clients-3.png";
import img4 from "../../../assets/h4-clients-4.png";
import img5 from "../../../assets/h4-clients-5.png";
import img6 from "../../../assets/h4-clients-6.png";
const Brand = () => {
  return (
    <div className="my-10">
      <p className="text-center text-gray-500 font-semibold">BRANDS</p>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6   p-4">
        <div className="border  border-gray-300 hover:border-black ">
          <img  src={img6} alt="logo" />
        </div>
        <div className="border border-gray-300 hover:border-black">
          <img src={img1} alt="logo" />
        </div>
        <div className="border border-gray-300 hover:border-black">
          <img src={img5} alt="logo" />
        </div>
        <div className="border border-gray-300 hover:border-black">
          <img src={img4} alt="logo" />
        </div>
        <div className="border border-gray-300 hover:border-black">
          <img src={img3} alt="logo" />
        </div>
        <div className="border border-gray-300 hover:border-black">
          <img src={img2} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
