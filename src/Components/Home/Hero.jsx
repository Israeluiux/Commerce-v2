import { FaGift } from "react-icons/fa"
import { FaGifts } from "react-icons/fa6"
import { Link } from "react-router-dom"
import HeroCard from "./HeroCard"

const Hero = () => {
    return (
          <div className="h-100 w-full px-28 bg-red-600 max-w-screen-xl gap-3 z-0 m-auto">
            <div className="h-full w-full flex justify-between items-center">
             <div className=" flex justify-center flex-col gap-7">
              {/* Left side of the Hero section */}
                  <p className="bg-white text-red-500 py-2 px-4 rounded-3xl flex items-center gap-2 w-fit"><FaGift /> <span>Best Offers for you</span></p>
                  <div>
                    <h1 className="text-white text-4xl font-bold">Weekend Flash Sales</h1>
                    <div className="bg-amber-400 w-fit p-2 mt-3 text-white">Up To <span className="text-4xl font-bold">50% OFF</span></div>
                  </div>
                  <p className="text-white text-xl">Claim by ordering a product now</p>
              </div>
              {/* Right side of the Hero section */}
                  <HeroCard />
            </div>
          </div>
    )
}

export default Hero