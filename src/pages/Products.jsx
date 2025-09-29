import { useEffect, useState } from "react"
import Card from "../Components/Home/Card"
import { FaFilter, FaSearch } from "react-icons/fa"

const AllProduct = () => {
    const [item, setItems] = useState([])
    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`${API_URL}/items`)
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])

    return(
        <section className="px-3 sm:px-6 lg:px-32 pt-8 max-w-screen-xl m-auto">
             <h2 className="text-3xl mb-5">All Products</h2>
            <div className="flex gap-2 ">
                <input type="text" placeholder={`Search product`} className="p-3 w-full outline-gray-300 outline-1 rounded-4xl placeholder:text-[14px]" />
                <div className="outline flex items-center justify-center px-4 rounded-4xl outline-gray-300 cursor-pointer"><FaFilter /></div>
                <button className="bg-black p-2 px-4 text-white rounded-3xl cursor-pointer">Search</button>
            </div>
            <div className="grid  my-12 gap-8" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 2fr))'}}>
            {
                item.map(item => (
                    <Card item={item} key={item.id} link={`product/${item.id}`} />
                ))
            }
        </div>
        </section>
    )
}

export default AllProduct