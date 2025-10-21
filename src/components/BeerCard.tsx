import React from "react"
const BeerCard: React.FC<{img_src:string,title:string,price:number,inStock:boolean}> = ({img_src,title,price,inStock}) => {
  return (
    <div className='beerCard'>
      <img src={img_src} alt="" />
      <h2><b>{title}</b></h2>
      <p>{price} Ft</p>
      <h3 className={inStock ? "available" : "notAvailable"}>{inStock ? "Raktáron" : "Nincs raktáron"}</h3>
    </div>
  )
}

export default BeerCard