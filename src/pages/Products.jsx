import { useEffect, useState } from "react"
import Card from "../Components/Home/Card"
import { FaSearch } from "react-icons/fa"

const AllProduct = () => {
    const [item, setItems] = useState([])

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
        <section className="px-3 sm:px-6 lg:px-32 pt-8 max-w-screen-xl m-auto">
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