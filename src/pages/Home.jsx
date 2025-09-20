import CTO from "../Components/Home/CTO";
import Hero from "../Components/Home/Hero";
import Product from "../Components/Home/Product";
import Recommend from "../Components/Home/Recommend";
import Trending from "../Components/Home/Trending";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <Product />
      {/* <Recommend /> */}
      <Trending />
      <CTO size='px-32' />
    </div>
  );
};

export default Home;
