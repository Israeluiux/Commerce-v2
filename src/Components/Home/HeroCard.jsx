import minimal from "../../assets/minimalist.jpg"

const HeroCard = () => {
    return(
        <div className="flex ">
            <div className="h-auto w-60 p-2 bg-white rounded-2xl transform rotate-[-8deg] shadow z-10 -mr-4 hover:rotate-0 transition duration-300">
                <div className="w-full h-50 bg-[#f5f5f5] rounded-xl"><img className="w-full h-full object-cover rounded-xl" src={minimal} alt="" /></div>
                <p className="my-3 text-black/60">Royal and Luxury Sofa Set</p>
                <div className="flex mb-3">
                    <p className="text-red-500 font-medium">₦58,899 <span className="text-black/40 line-through">₦90,700</span></p>
                    <span className="text-black/60">🔥126 sold</span>
                </div>
            </div>
            <div className="h-auto w-60 p-2 bg-white rounded-2xl transform rotate-[6deg] hover:rotate-0 transition duration-300">
                <div className="w-full h-50 bg-[#f5f5f5] rounded-xl"><img className="w-full h-full object-cover rounded-xl" src={minimal} alt="" /></div>
                <p className="my-3 text-black/60">Royal and Luxury Sofa Set</p>
                <div className="flex mb-3">
                    <p className="text-red-500 font-medium">₦58,899 <span className="text-black/40 line-through">₦90,700</span></p>
                    <span className="text-black/60">🔥126 sold</span>
                </div>
            </div>
        </div>
    )
}

export default HeroCard