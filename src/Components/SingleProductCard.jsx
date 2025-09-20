import { useEffect, useState } from "react"
import { FaBasketShopping, FaHeart, FaStar, FaTruck } from "react-icons/fa6"
import { useParams } from "react-router-dom"

const SingleProductCard = () => {
    const { id } = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`http://localhost:7000/items/${id}`)
                const data = await response.json()
                console.log(data)
                setLoading(false)
                setItem(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])

    if(loading === true){
        return(
            <>
                Loading
            </>
        )
    } else {
        
        return(
            <>
                <div className="flex gap-12 items-center">
                    <div className="w-120 h-120 bg-[#d6d6d6] rounded-2xl"><img className="rounded-2xl w-full h-full object-cover" src={item.productImage} alt="" /></div>
                    {/* right side */}
                    <div className="w-[50%]">
                        <div className="flex justify-between">
                            <p>{item.company}</p>
                            <p className="text-black/35">{item.id}</p>
                        </div>
                        <h1 className="font-bold text-3xl my-4">{item.product}</h1>
                        <div className="flex items-center">
                                <FaStar color="orange" />
                                <FaStar color="orange" />
                                <FaStar color="orange" />
                                <FaStar color="orange" />
                            <p className="ml-3 text-black/40">42 reviews</p>
                        </div>
                        <div className="text-3xl font-bold my-6">${Number(item.price).toFixed(2)}</div>
                        <div className="color">
                            <p className="mb-1.5">Color</p>
                            <div className="color-img flex gap-2">
                                {
                                item.color.map((each) => (
                                    <div className="w-12 h-15 outline outline-gray-400 bg-[#d6d6d6] rounded-[8px]"><img className="w-full h-full object-cover rounded-[8px]" src={each} alt="" /></div>
                                ))
                                }
                                {/* <div className="w-12 h-15 bg-[#d6d6d6] rounded-[8px]"><img src="" alt="" /></div>
                                <div className="w-12 h-15 bg-[#d6d6d6] rounded-[8px]"><img src="" alt="" /></div> */}
                            </div>
                        </div>
                        <div className="size my-4">
                            <p>Size</p>
                            <div className="flex gap-3.5 flex-wrap mt-2.5">
                                {
                                    item.size.map((each) => (
                                        <button className="p-2 px-4 outline outline-gray-300">{each}</button>
                                    ))
                                }
                            </div>
                        </div>
                        {/* CTOS */}
                        <div className="flex gap-2">
                            <button className="p-4 px-30 flex items-center gap-2.5 cursor-pointer rounded-2xl bg-black text-white"><FaBasketShopping size={20} /> <span>Add to cart</span></button>
                            <button className="p-4 px-5 cursor-pointer rounded-2xl bg-[#d6d6d6] text-white"><FaHeart size={20} /></button>
                        </div>
                        <p className="mt-3 flex items-center gap-2 text-sm"><FaTruck /> <span>Free delivery on orders over $300</span></p>
                    </div>
                </div>
            </>
        )
    }

}

export default SingleProductCard