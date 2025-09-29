import TrendCard from './Trendingcard'
import { useEffect, useState } from 'react'

const Trending = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('https://commerce-v2.onrender.com/category')
                const data = await response.json()
                setCategory(data.slice(0, 6))
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])
    

    return(
            <section className="px-3 sm:px-6 lg:px-32 pt-12 max-w-screen-xl m-auto">
                <div className='flex gap-4'>
                    {
                        category.map(each => (
                            <div className='flex flex-col gap-2'>
                                <div className='w-40 h-30 bg-[#f5f5f5] rounded-[8px]'><img className='w-full h-full object-cover rounded-[8px]' src={each.image} alt="" /></div>
                                <div>
                                    <p className='font-semibold text-black/70'>{each.category}</p>
                                    <p className='text-black/60'>126 products</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
    )
}

export default Trending
