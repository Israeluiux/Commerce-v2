import TrendCard from './Trendingcard'
import { useEffect, useState } from 'react'

const Trending = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:7000/category')
                const data = await response.json()
                setCategory(data.slice(0, 4))
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])
    

    return(
            <section className="px-3 sm:px-6 lg:px-32 py-8 max-w-screen-xl m-auto">
                <p className="text-3xl mb-8">Explore Trending Categories</p>
                <div className=" grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(23rem, 1fr))'}}>
                    {
                        category.map(each => (
                            <TrendCard img={each.image} text={each.text} key={each.id} />
                        ))
                    }
                </div>
            </section>
    )
}

export default Trending