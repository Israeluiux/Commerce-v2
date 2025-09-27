import { useState } from "react"
import { FaStar, FaStarHalf } from "react-icons/fa6"
import { Link, useLocation } from "react-router-dom"
import minimal from "../../assets/minimalist.jpg"
import { BiCart } from "react-icons/bi"

const Card = ({ item }) => {
    const price = Number(item.pricing.price).toFixed(2)
    
    return(
            <div className="rounded-2xl relative flex flex-col">
                <div className="h-auto w-60 bg-white">
                    <div className="w-full h-50 bg-[#f5f5f5]"><img className="w-full h-full object-cover" src={minimal} alt="" /></div>
                    <p className="mt-3  text-black/60">Royal and Luxury Sofa Set</p>
                    <div className="flex my-1 items-center gap-1">
                        <p className="text-red-500 font-bold text-xl">₦58,899</p>
                        <span className="text-black/40 line-through">₦90,700</span>
                        <span className="text-black/60">🔥126 sold</span>
                    </div>
                    <p className="text-red-500 my-1">Only 6 pieces left</p>
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

// return(
//         <div className="rounded-2xl relative flex flex-col">
//         <div className="absolute py-1.5 px-2.5 bg-white rounded-3xl text-xs right-3 top-3 outline-1 outline-gray-300">{item.categorization.category}</div>
//         <div className="h-56 bg-[#d6d6d6] "><img className="w-full h-full object-cover" src={item.media.thumbnail} alt="" /></div>
//         <p className="my-3 text-xl font-medium">{item.name}</p>
//         <div className="flex justify-between items-center mb-4">
//             <p className="flex items-center gap-1 text-[#5d5d5d] text-[13px]"><FaStar color="orange" /> <span>{item.engagement.rating}(1.2k reviews)</span></p>
//             <p className="text-xl" style={{fontWeight: 'bold'}}>${price}</p>
//         </div>
//         <div className="flex justify-between mt-auto gap-1.5">
//             <Link className="w-30 p-3 flex justify-center items-center outline-gray-300 outline-1 rounded-3xl hover:bg-[#0000001d]"><span>Add to Cart</span></Link>
//             <Link to={`/product/${item.id}`} className="w-30 flex justify-center items-center bg-black text-white rounded-3xl hover:bg-[#333]"><span>Buy Now</span></Link>
//         </div>
//         </div>
// )