import React from "react"
import type { Beer } from "../App"
const BeerCard: React.FC<{beer:Beer,addToCard:(beers:any)=>void}> = ({addToCard,beer}) => {
  return (
    <div className='beerCard'>
      <img src={beer.image} alt={beer.name} />
      <h2><strong>{beer.name}</strong></h2>
      <p>{beer.price} Ft</p>
      <h3 className={beer.available ? "available" : "notAvailable"}><strong>{beer.available ? "Raktáron" : "Nincs raktáron"}</strong></h3>
      <button onClick={()=>addToCard(beer)}>Kosárba!</button>
    </div>
  )
}

export default BeerCard