import { useEffect, useState } from "react"
import TrendCard from "../Components/Home/Trendingcard"

const Category = () => {
    const [category, setCategory] = useState([])
    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`${API_URL}/category`)
                const data = await response.json()
                setCategory(data.slice())
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])


    return(
        <section className="px-3 sm:px-6 lg:px-32 pt-8 max-w-screen-xl m-auto">
             <p className="text-3xl mb-8">Explore Categories</p>
            <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(23rem, 1fr))'}}>
                    {
                        category.map(each => (
                            <TrendCard img={each.image} text={each.text} key={each.id} category={each.category} />
                        ))
                    }
            </div>
        </section>
    )
}

export default Category