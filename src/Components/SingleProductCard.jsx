import { useContext, useEffect, useState } from "react"
import { FaBasketShopping, FaHeart, FaMinus, FaPlus, FaStar, FaTruck } from "react-icons/fa6"
import { useParams } from "react-router-dom"
import Description from "./SingleCard/Description"
import Reviews from "./SingleCard/Reviews"

const SingleProductCard = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [review, setReview] = useState(0)
    const [userReview, setUserReview] = useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(1)
    const [current, setCurrent] = useState("Description")
    
    const rendertabs = {
        Description: <Description />,
        Reviews: <Reviews review={review} userReview={userReview} />,
        Ratings: "No ratings found"
    }


    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`http://localhost:7000/items/${id}`)
                const data = await response.json()
                setItem(data)
                console.log(data)
                setLoading(false)
                const result = data.engagement.reviews
                setReview(result.length)
                setUserReview(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [id])

    const decrease = () => {
        const current = count
        count < 2 ? setCount(1) : setCount(current - 1)
    }

    const increase = () => {
        const current = count
        setCount(current + 1)
    }

    const AddCart = () => {
        localStorage.setItem("Cart Details", JSON.stringify(item) )
    }



    if(loading === true){
        return(
            <>
                Loading....
            </>
        )
    } else {
        
        return(
            <section>
                {/* Top section - product details */}
                <div className="flex gap-12 items-center m-auto flex-col md:flex-row ">
                    <div className=" w-full h-100 md:w-120 md:h-120 bg-[#d6d6d6] rounded-2xl"><img className="rounded-2xl w-full h-full object-cover" src={item.media.thumbnail} alt="" /></div>
                    {/* right side */}
                    <div className="w-full md:w-[50%]">
                        <div className="flex justify-between">
                            <p>{item.brand.name}</p>
                            <p className="text-black/35">{item.id}</p>
                        </div>
                        <h1 className="font-bold text-3xl my-4">{item.name}</h1>
                        <div className="flex items-center">
                                <FaStar color="orange" />
                                <FaStar color="orange" />
                                <FaStar color="orange" />
                                <FaStar color="orange" />
                            <p className="ml-3 text-black/40">{item.engagement.wishlistCount} reviews</p>
                        </div>
                        <div className="text-3xl font-bold my-6">${Number(item.pricing.price).toFixed(2)}</div>
                        <div className="color">
                            <p className="mb-1.5">Color</p>
                            <div className="color-img flex gap-2">
                                {
                                item.media.images.map((each, index) => (
                                    <div key={index} className="w-12 h-15 outline outline-gray-400 bg-[#d6d6d6] rounded-[8px]"><img className="w-full h-full object-cover rounded-[8px]" src={each} alt="" /></div>
                                ))
                                }
                            </div>
                        </div>
                        <div className="size my-4">
                            <p className="mb-2">Units left:</p>
                            <h1><span className="text-2xl font-bold">{item.inventory.stockQuantity}</span> <span>units</span></h1>
                        </div>
                        <div className="size my-6">
                            <p className="mb-2"></p>
                            <div className="buttons flex gap-4 items-center">
                                <button onClick={decrease} className="p-4 bg-black text-white rounded-3xl cursor-pointer"><FaMinus /> </button>
                                <p className="text-3xl font-bold">{count}</p>
                                <button onClick={increase} className="p-4 bg-black text-white rounded-3xl cursor-pointer"><FaPlus /> </button>
                            </div>
                        </div>
                        {/* CTOS */}
                        <div className="flex gap-2">
                            <button onClick={AddCart} className="p-4 w-full justify-center flex items-center gap-2.5 cursor-pointer rounded-2xl bg-black text-white"><FaBasketShopping size={20} /> <span>Add to cart</span></button>
                            <button className="p-4 px-5 cursor-pointer rounded-2xl bg-[#d6d6d6] text-white"><FaHeart size={20} /></button>
                        </div>
                        <p className="mt-3 flex items-center gap-2 text-sm"><FaTruck /> <span>Free delivery on orders over $300</span></p>
                    </div>
                </div>
                {/* Bottom category */}
                <div className="pt-12">
                    <div className="flex gap-1.5 mb-8">
                        <button onClick={() => setCurrent("Description")} className={`p-3 cursor-pointer ${current === "Description"  ? 'border-b-2' : 'text-black/30'} `}>Description</button>
                        <button onClick={() => setCurrent("Reviews")} className={`p-3 cursor-pointer ${current === "Reviews"  ? 'border-b-2' : 'text-black/30'} `}>Reviews</button>
                        <button onClick={() => setCurrent("Ratings")} className={`p-3 cursor-pointer ${current === "Ratings"  ? 'border-b-2' : 'text-black/30'} `}>Ratings</button>
                    </div>

                    {rendertabs[current]}
                </div>
            </section>
        )
    }

}

export default SingleProductCard