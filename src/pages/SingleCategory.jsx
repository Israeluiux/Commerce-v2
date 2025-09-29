import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../Components/Home/Card"

const SingleCategory = () => {
    const [newCategory, setNewCategory] = useState([])
    const { category } = useParams()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`https://commerce-ow7c.onrender.com/items`)
                const data = await response.json()
                const checkCategory = data.filter(item => item.categorization.category === category)
                setNewCategory(checkCategory)
                console.log(checkCategory)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [])

    return(
        <section className="px-3 sm:px-6 lg:px-32 pt-8 max-w-screen-xl m-auto">
            <h2 className="text-3xl mb-5">Results for {category}</h2>
            <input type="text" placeholder={`Search ${category}`} className="p-3 w-full outline-gray-300 outline-1 rounded-4xl placeholder:text-[14px]" />

            <div className="grid  my-12 gap-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {
                newCategory.map(item => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
        </section>
    )
}

export default SingleCategory