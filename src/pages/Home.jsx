import CTO from "../Components/Home/CTO";
import FlashSales from "../Components/Home/FlashSales";
import Hero from "../Components/Home/Hero";
import Product from "../Components/Home/Product";
import Recommend from "../Components/Home/Recommend";
import Trending from "../Components/Home/Trending";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <Trending />
      <FlashSales />
      <Product />

      {/* <Recommend /> */}
    </div>
  );
};

export default Home;
