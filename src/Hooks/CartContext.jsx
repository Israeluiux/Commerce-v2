import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const { id } = useParams()
    const [cart, setCart] = useState(null)

    // const AddCart = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:7000/items`)
    //         const data = await response.json()
    //         setCart(data)
    //         console.log(data)
    //         localStorage.setItem("Cart details", JSON.stringify(data))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    return <CartContext.Provider value={{}}>
        {children}
    </CartContext.Provider>
}