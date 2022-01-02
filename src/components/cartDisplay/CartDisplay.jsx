import React from 'react';

import { useCartContext } from '../../context/CartContext'
import Cart from '../cart/Cart';

const CartDisplay = () => {
    const { cartList } = useCartContext();

    return(
        <div className="cart-body">
        <h1 className="title-cart">Your Cart</h1>
        {
            cartList.map((food) => (
                <Cart food={food} />
            ))

        }
    
    </div>
    )
}
export default CartDisplay;