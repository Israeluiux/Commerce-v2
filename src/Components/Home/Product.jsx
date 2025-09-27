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
         <section className="px-2 sm:px-4 lg:px-24 relative max-w-screen-xl m-auto mt-8">
          <div className="bg-white p-6 z-20 rounded-t-3xl">
            <div className="flex justify-between flex-col md:flex-row md:items-center">
                <div>
                    <p className="text-3xl font-bold text-red-500">Just For You</p>
                    <p className="text-3xl font-bold">Specially curated for you 🥳</p>
                </div>
                <Link className="outline outline-red-500 p-2.5 px-5 text-red-500 rounded-xl flex items-center gap-2"><span>View</span>  <GoArrowRight /></Link>
            </div>
        <div className="grid  my-8 gap-8" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 2fr))'}}>
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