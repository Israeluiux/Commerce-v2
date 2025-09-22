import { useEffect, useState } from "react";
import Card from "./Card";

const Recommend = () => {
    const [item, setItem] = useState([])
    const cards = Array.from({ length: 10 }, (_, i) => `Card ${i + 1}`);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('https://commerce-backend-7eug.onrender.com/items')
                const data = await response.json()
                setItem(data)
            } catch (error) {
                
            }
        }
        fetchdata()
    }, [])

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-3">Suggested for you</h2>

      <div className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth">
        {item.map((card, idx) => (
            <Card item={card}/>
            
        ))}
      </div>
    </div>
  );
}

export default Recommend