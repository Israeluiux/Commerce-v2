import { useEffect, useState } from "react"
import Card from "./Card"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { GoArrowRight } from "react-icons/go"

const Product = () => {
    const [item, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('https://commerce-v2.onrender.com/items')
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
         <section className="px-2 sm:px-4 lg:px-28 relative max-w-screen-xl m-auto mt-8">
          <div className="bg-white p-6 z-20 rounded-t-3xl">
            <div className="flex justify-between flex-col md:flex-row md:items-center">
                <div>
                    <p className="text-3xl font-bold text-red-500">Just For You</p>
                    <p className="text-3xl font-bold">Specially curated for you 🥳</p>
                </div>
                <Link className="outline outline-red-500 p-2.5 px-5 text-red-500 rounded-xl flex items-center gap-2 hover:bg-red-500 hover:text-white"><span>View</span>  <GoArrowRight /></Link>
            </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-6" >
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