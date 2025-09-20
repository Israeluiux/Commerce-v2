import { useState } from "react"
import { FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Card = ({ item, link }) => {
    const price = Number(item.price).toFixed(2)
    
    return(
            <div className="rounded-2xl relative">
            <div className="absolute py-1.5 px-2.5 bg-white rounded-3xl text-xs right-3 top-3 outline-1 outline-gray-300">{item.category}</div>
            <div className="h-56 bg-[#d6d6d6] rounded-2xl"><img className="w-full h-full object-cover rounded-2xl " src={item.productImage} alt="" /></div>
            <p className="my-3 text-2xl">{item.product}</p>
            <div className="flex justify-between items-center">
                <p className="flex items-center gap-1 text-[#5d5d5d]"><FaStar color="orange" /> <span>{item.review}(1.2k reviews)</span></p>
                <p className="text-2xl" style={{fontWeight: 'bold'}}>${price}</p>
            </div>
            <div className="flex justify-between mt-4">
                <Link className="w-35 p-3 flex justify-center items-center outline-gray-300 outline-1 rounded-3xl hover:bg-[#0000001d]"><span>Add to Cart</span></Link>
                <Link to={link} className="w-35 flex justify-center items-center bg-black text-white rounded-3xl hover:bg-[#333]"><span>Buy Now</span></Link>
            </div>
            </div>
    )
}

export default Card