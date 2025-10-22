import { useEffect, useState } from "react"
import BeerCard from "./components/BeerCard"
import Cart from "./components/Cart"

export interface Beer {
  name:string,
  image:string,
  price:number,
  available:boolean
}

export interface CartItem extends Beer {
  amount:number
}

const App = () => {
  const [data,setData] = useState<Beer[]>([])
  const [cart,setCart] = useState<CartItem[]>([])

  useEffect(()=>{
    fetch("/data.json").then(res=>res.json())
    .then(res=>{
      setData(res)
    })
  },[])

  const addToCart = (beer:Beer) => {
    const id = cart.findIndex(element=>element.name == beer.name)
    if(id != -1){
      cart[id].amount += 1
      setCart(JSON.parse(JSON.stringify(cart)))
    }else{
      setCart(prev=>[...prev,{...beer,amount:1}])
    }
  }

  const removeFromCart = (beer:CartItem) => {
    cart.splice(cart.findIndex(item=>item.name==beer.name),1)
    setCart(JSON.parse(JSON.stringify(cart)))
  }

  return (
    <>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <div className="beerCardWrapper">
        {data.map((beer,id)=><BeerCard addToCard={addToCart} key={id} beer={beer} />)}
      </div>
    </>
  )
}

export default App