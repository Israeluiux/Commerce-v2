import { useEffect, useState } from "react"
import SingleProductCard from "../Components/SingleProductCard"
import Card from "../Components/Home/Card"
import CTO from "../Components/Home/CTO"


const SingleProduct = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const fetchdata =  async() => {
            try {
                const response = await fetch('http://localhost:7000/items')
                const data = await response.json()
                setItem(data.slice(0, 9))
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [])

    return(
        <section className="px-3 sm:px-6 lg:px-32 pt-8 pb-4 flex justify-center flex-col  max-w-screen-xl m-auto">
            <SingleProductCard />
            <section className="pt-12">
                <p className="text-4xl">Suggested for you</p>
                <div className="grid  my-12 gap-8" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))'}}>
                    {
                        item.map(each => (
                            <Card key={each.id} item={each} />
                        ))
                    }
                </div>
            </section>
        </section>
    )
}

export default SingleProduct