import React from 'react';
import type { Beer } from '../App';

interface Cart {
    cart:Beer[]
}

const Cart: React.FC<Cart> = ({cart}) => {
    return (
    <>
        {cart.length} item in cart
    </>
    );
};
export default Cart;