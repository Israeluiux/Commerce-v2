import { useEffect, useState } from "react"
import { FaPlus, FaTruck, FaMinus } from "react-icons/fa6"

const CartDetail = () => {
    const [cart, setCart] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const GetCart = () => {
           const cart =  localStorage.getItem("Cart Details")
            setCart(JSON.parse(cart))
            setLoading(false)
        }
        GetCart()
    }, [])

    if(loading){
        return(
            <>fetching cart details</>
        )
    }

    return(
        <>
        <div className="flex justify-between items-center">
            {/* Left section of the cart details */}
            <div className="flex gap-3 items-center">
                <div className="w-25 h-20 bg-[#f5f5f5] rounded-[5px]"><img className="w-full h-full object-cover rounded-[5px]" src={cart.media.thumbnail} alt="" /></div>
                <div>
                    <p className="text-[14px] text-black/50">{cart.categorization.category}</p>
                    <h1 className="font-semibold my-1">{cart.name}</h1>
                    <p className="text-[14px] flex items-center gap-1 text-black/70"><FaTruck /><span>{cart.logistics.returnPolicy}</span></p>
                </div>
            </div>
            {/* Right section of the cart details */}
            <div>
                <h2 className="font-semibold text-[17px] mb-3">${cart.pricing.price}</h2>
                <div className="buttons flex gap-2 items-center justify-end">
                    <button className="p-1 bg-black text-white rounded-3xl cursor-pointer"><FaMinus size={12} /> </button>
                    <p className="text-[16px] font-bold">1</p>
                    <button className="p-1 bg-black text-white rounded-3xl cursor-pointer"><FaPlus size={12} /> </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartDetail