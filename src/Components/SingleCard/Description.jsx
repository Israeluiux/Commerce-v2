import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Description = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`http://localhost:7000/items/${id}`)
                const data = await response.json()
                setItem(data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchdata()
    }, [id])
    
    if(loading){
        return <>Loadingg...</>
    }
    

    return(
        <>
            <div>
                <h1 className="text-2xl mb-4">Product Description</h1>
                <p className="mb-4">{item.description}</p>
                <h1 className="text-2xl">Specifications</h1>
                <ol className="mt-4 space-y-2 list-decimal list-inside">
                    {
                        item.specifications.map((list, index) => (                   
                            <li key={index}><strong>{list.label}:</strong> {list.value}</li>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default Description