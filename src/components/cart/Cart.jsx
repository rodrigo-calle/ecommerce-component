import React, { useState } from 'react';

import './Cart.css'

const Cart = (props) => {
    const { food } = props;
    const [amount, setAmount] = useState(1);


    return(
        <div className="cart-container" key={food.id}>
        <img className="cart-image" src={food.image} alt={food.name} /> 
        <div className="cart-content">
            <p className="cart-name" >{food.name}</p>
            <p className="cart-price">${food.price}</p>
            <div className="cart-account">
            <div className="counter-container">
                <button 
                type="button"
                onClick={
                    (amount >= 1)? 
                        ()=> setAmount(1)
                    :
                        ()=> setAmount(amount-1)
                    }
                >
                    {"<"}
                </button>
                <p> {amount}</p>
                <button 
                type="button"
                onClick={()=> setAmount(amount+1)}
                >
                    {">"}
                </button>
            </div>
                <p className="cart-total"> $ {(food.price*amount).toFixed(2)}</p>
            </div>
        </div>

    </div>
    )
}

export default Cart;