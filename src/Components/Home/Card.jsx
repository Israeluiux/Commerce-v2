import { useState } from "react"
import { FaStar, FaStarHalf } from "react-icons/fa6"
import { Link, useLocation } from "react-router-dom"
import minimal from "../../assets/minimalist.jpg"
import { BiCart } from "react-icons/bi"

const Card = ({ item }) => {
    const price = Number(item.pricing.price).toFixed(2)
    
    return(
            <div className="rounded-2xl relative flex flex-col">
                <div className="h-auto bg-white">
                    <div className="w-full h-50 bg-[#f5f5f5]"><img className="w-full h-full object-cover" src={minimal} alt="" /></div>
                    <p className="mt-3  text-black/60">Royal and Luxury Sofa Set</p>
                    <div className="flex my-1 items-center gap-1">
                        <p className="text-red-500 font-bold text-xl">₦{price}</p>
                        <span className="text-black/40 line-through">₦9,070</span>
                        <span className="text-black/60">🔥126 sold</span>
                    </div>
                    <p className="text-red-500 my-1">Only {item.inventory.stockQuantity} pieces left</p>
                    {/* stars */}
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 my-1 items-center">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                            <p className="text-black/50">1,326</p>
                        </div>
                        <div className="outline p-1.5 rounded-2xl">
                            <BiCart size={20} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card
