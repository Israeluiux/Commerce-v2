import { useState, useEffect } from "react"
import CartDetail from "../Components/CartDetail"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const Cart = () => {
    const cartItem = useSelector(state => state.cart.item)

    const totalItems = cartItem.reduce((sum, item) => sum + item.qty, 0)
    const subtotal = cartItem.reduce((sum, item) => sum + item.qty * item.pricing.price, 0).toFixed(2)
    const total = cartItem.reduce((sum, item) => sum + item.qty * item.pricing.price, 0).toFixed(2)


    return(
        <section className="px-32 pt-8 max-w-screen-xl m-auto">
            <h2 className="font-bold text-2xl">Cart</h2>
            <div className="flex gap-4">
                {/* Cart Details */}
                <div className="outline outline-black/10 p-3 mt-6 rounded-xl flex flex-col gap-6 w-[70%] h-fit">
                    <CartDetail />
                </div>
                {/* Checkout */}
                <div className="outline outline-black/10 p-3 mt-6 rounded-xl flex flex-col gap-2 w-[30%] h-fit">
                    <h2 className="font-medium">Order Summary</h2>
                    <ul className="border-y border-gray-200 py-4 my-1">
                        <li className="flex justify-between my-2"><span className="text-black/40">Items</span> <span>{totalItems}</span></li>
                        <li className="flex justify-between my-2"><span className="text-black/40">Sub Total</span> <span>${subtotal}</span></li>
                        <li className="flex justify-between my-2"><span className="text-black/40">Shipping</span> <span>$0.00</span></li>
                        <li className="flex justify-between my-2"><span className="text-black/40">Taxes</span> <span>$00.00</span></li>
                        <li className="flex justify-between my-2"><span className="text-black/40">Coupon Discount</span> <span>-$00.00</span></li>
                    </ul>
                        <p className="flex justify-between my-2"><span className="text-black/40">Total</span> <span>${total}</span></p>
                    <Link className="bg-black text-white text-center p-3 rounded-4xl">Proceed to Checkout</Link>
                </div>
            </div>
        </section>
    )
}

export default Cart