import { useState } from "react"
import { FaStar } from "react-icons/fa6"
import { Link, useLocation } from "react-router-dom"

const Card = ({ item }) => {
    const price = Number(item.pricing.price).toFixed(2)
    
    return(
            <div className="rounded-2xl relative flex flex-col">
            <div className="absolute py-1.5 px-2.5 bg-white rounded-3xl text-xs right-3 top-3 outline-1 outline-gray-300">{item.categorization.category}</div>
            <div className="h-56 bg-[#d6d6d6] rounded-2xl"><img className="w-full h-full object-cover rounded-2xl " src={item.media.thumbnail} alt="" /></div>
            <p className="my-3 text-2xl">{item.name}</p>
            <div className="flex justify-between items-center mb-4">
                <p className="flex items-center gap-1 text-[#5d5d5d]"><FaStar color="orange" /> <span>{item.engagement.rating}(1.2k reviews)</span></p>
                <p className="text-2xl" style={{fontWeight: 'bold'}}>${price}</p>
            </div>
            <div className="flex justify-between mt-auto">
                <Link className="w-35 p-3 flex justify-center items-center outline-gray-300 outline-1 rounded-3xl hover:bg-[#0000001d]"><span>Add to Cart</span></Link>
                <Link to={`/product/${item.id}`} className="w-35 flex justify-center items-center bg-black text-white rounded-3xl hover:bg-[#333]"><span>Buy Now</span></Link>
            </div>
            </div>
    )
}

export default Card