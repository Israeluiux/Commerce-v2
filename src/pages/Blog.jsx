import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Blog = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:7000/blog')
                const data = await response.json()
                setBlog(data)
            } catch (error) {
                
            }
        }
        fetchdata()
    }, [])


    return(
        <section className="pt-8 px-4 sm:px-6 lg:px-32 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        blog.map(each => (                     
                            <div key={each.id} className="w-auto relative">
                                <div className="w-full h-80 rounded-4xl bg-[#f5f5f5]"><img className="w-full h-full object-cover rounded-4xl" src={each.image} alt="" /></div>
                                <div className="absolute py-1.5 px-2.5 bg-white rounded-3xl text-xs right-5 top-5 outline-1 outline-gray-300">{each.category}</div>
                                <div className="py-4">
                                    <p className="font-medium text-xl">{each.title}</p>
                                    <p className="my-3 text-sm text-[#808080] leading-4.5">{each.body}</p>
                                    <Link className="flex items-center-safe gap-2 py-2"><span>Read more</span><FaArrowRight /></Link>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}

export default Blog