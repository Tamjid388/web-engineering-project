import Banner from "./Banner.jsx";
import { BlogSection } from "./BlogSection";
import Headline from "./FeatureThree/Headline.jsx";
import FootWeear from "./FirstFeature/FootWeear.jsx";
import Brand from "./secondFeature/Brand.jsx";

export const Home = () => {
  return (
    <div>
      <Banner/>
      <Brand/>
       <Headline/>
      <FootWeear/>
     
      <BlogSection />

    </div>
  );
};
