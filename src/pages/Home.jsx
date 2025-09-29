import CTO from "../Components/Home/CTO";
import FlashSales from "../Components/Home/FlashSales";
import Hero from "../Components/Home/Hero";
import Product from "../Components/Home/Product";
import Trending from "../Components/Home/Trending";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <Trending />
      <FlashSales />
      <Product />
    </div>
  );
};

export default Home;
