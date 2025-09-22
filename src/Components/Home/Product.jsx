import { useEffect, useState } from "react"
import Card from "./Card"
import { useParams } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

const Product = () => {
    const [item, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:7000/items')
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])

    return(
        <>
         <section className="px-2 sm:px-4 lg:px-24 relative max-w-screen-xl m-auto " style={{marginTop: '-5rem'}}>
          <div className="bg-white p-6 z-20 rounded-t-3xl">
            <div className="flex justify-between flex-col md:flex-row md:items-center">
                <p className="text-3xl mb-6 md:mb-0">Get All You Need</p>
                <div className="relative flex items-center w-full sm:w-100">
                    <input type="text"
                        placeholder="Search for products"
                        className="p-3 w-full sm:w-100 outline-gray-300 outline-1 rounded-4xl"
                    />
                    <button className="bg-black text-white p-2 rounded-3xl absolute right-1"><FaSearch /></button>
                </div>
            </div>
        <div className="grid  my-12 gap-8" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 2fr))'}}>
            {
                item.map(item => (
                    <Card item={item} key={item.id} link={`product/${item.id}`} />
                ))
            }
        </div>
          </div>
         </section>
        </>
    )
}

export default Product