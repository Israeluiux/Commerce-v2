import { useEffect, useState } from "react"
import { BiCart } from "react-icons/bi"
import { FaStar, FaStarHalf } from "react-icons/fa"
import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"

const FlashSales = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://commerce-v2.onrender.com/items`)
                const data = await response.json()
                setItem(data.slice(0, 4))
            } catch (error) {
                console.error(error)
            }
        } 
        fetchdata()
    }, [])


    return(
        <section className="px-2 sm:px-4 lg:px-32 relative max-w-screen-xl m-auto mt-8"> 
            <div className="h-12 bg-red-500 rounded-xl flex justify-between items-center px-4">
                <p className="font-bold text-white">Flash Sales</p>
                <Link className=" p-2.5 px-3 flex items-center gap-2 bg-red-500 text-white"><span>View</span>  <GoArrowRight /></Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-6" >
                {
                    item.map(each => (
                        <div className="h-auto bg-white">
                            <div className="w-full h-50 bg-[#f5f5f5]"><img className="w-full h-full object-cover" src={``} alt="" /></div>
                            <p className="mt-3  text-black/60">Royal and Luxury Sofa Set</p>
                            <div className="flex my-1 items-center gap-1">
                                <p className="text-red-500 font-bold text-xl">₦90,899</p>
                                <span className="text-black/40 line-through">₦9,070</span>
                                <span className="text-black/60">🔥126 sold</span>
                            </div>
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
                    ))
                }
            </div>
        </section>
    )
}

export default FlashSales