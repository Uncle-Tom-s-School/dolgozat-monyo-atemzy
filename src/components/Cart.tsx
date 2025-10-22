import React, { useEffect, useState } from 'react';
import type { CartItem } from '../App';


const Cart: React.FC<{cart:CartItem[],removeFromCart:(beer:CartItem)=>void}> = ({cart,removeFromCart}) => {
    const [sum,setSum] = useState(0)

    useEffect(()=>{
        setSum(0)
        cart.forEach(item=>setSum(prev=>prev+=item.price * item.amount))
    },[cart])

    return (
    <>
        {cart.length} item in cart

        <ul>
            {cart.map(beer=><li>{beer.name} {beer.amount} <button onClick={()=>removeFromCart(beer)}>Remove</button></li>)}
        </ul>

        {sum} Ft
    </>
    );
};
export default Cart;