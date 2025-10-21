import { useEffect, useState } from "react"
import BeerCard from "./components/BeerCard"

interface Beer {
  name:string,
  image:string,
  price:number,
  available:boolean
}

const App = () => {
  const [data,setData] = useState<Beer[]>([])

  useEffect(()=>{
    fetch("/data.json").then(res=>res.json())
    .then(res=>{
      setData(res)
    })
  },[])

  return (
    <div className="beerCardWrapper">
      {data.map((beer,id)=><BeerCard key={id} title={beer.name} price={beer.price} img_src={beer.image} inStock={beer.available} />)}
    </div>
  )
}

export default App