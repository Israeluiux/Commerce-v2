import { useState } from "react"
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6"
import { Link } from "react-router-dom"

const TrendCard = ({ img, text, category }) => {

    return(
        <>
            <div className="h-110 rounded-3xl bg-[#d6d6d6] relative">
                    <img className='w-full h-full object-cover rounded-3xl' src={img} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-3xl"></div>
                    <div className=" absolute bottom-8 left-4">
                        <p className="text-2xl font-bold text-white mb-2 w-[90%]">{text}</p>
                        <Link to={`/categories/${category}`} className="px-5 w-48 py-2.5 bg-white text-black rounded-3xl hover:bg-[#333] hover:text-white flex items-center gap-2"><span>Explore category</span> <FaArrowRight /> </Link>
                    </div>
                </div>
        </>
    )
}

export default TrendCard