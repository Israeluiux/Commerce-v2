import { useEffect, useState } from "react"
import TrendCard from "../Components/Home/Trendingcard"

const Category = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:7000/category')
                const data = await response.json()
                setCategory(data.slice())
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])


    return(
        <section className="pt-32 px-32 max-w-screen-xl m-auto">
             <p className="text-3xl mb-8">Explore Categories</p>
            <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))'}}>
                    {
                        category.map(each => (
                            <TrendCard img={each.image} text={each.text} key={each.id} />
                        ))
                    }
            </div>
        </section>
    )
}

export default Category