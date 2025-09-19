import { useEffect, useState } from "react"
import Card from "./Card"

const Product = () => {
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
        <>
         <section className="px-4 md:px-24 relative " style={{marginTop: '-5rem'}}>
          <div className="bg-white p-6 z-20 rounded-t-3xl">
            <div className="flex justify-between items-center">
                <p className="text-3xl ">Get All You Need</p>
                <div className="relative flex items-center">
                    <input type="text"
                        placeholder="Search for products"
                        className="p-3 w-100 outline-gray-300 outline-1 rounded-4xl"
                    />
                    <button className="bg-black text-white p-2 rounded-3xl absolute right-1">Search</button>
                </div>
            </div>
        <div className="grid  my-12 gap-8" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))'}}>
            {
                item.map(item => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
          </div>
         </section>
        </>
    )
}

export default Product