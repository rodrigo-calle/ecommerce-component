import React, { useState } from 'react';
import foods from '../../data/foodsData';

import './Menu.css'
import { useCartContext } from '../../context/CartContext'

const Menu = () => {
    
    const { cartList ,setCartList } = useCartContext();
    //const [ add, setAdd] = useState(false)

    return(
        <div className="card-body">
            <h1 className="menu-title">To Go Menu</h1>
            {
                foods.map((plate) => (
                    <div className="card" style={{backgroundColor: plate.color}} key={plate.name}>
                        <img className="plate-image" src={plate.image} alt={plate.name}/>
                        <div className="plate-content">
                            <p className="plate-name">{plate.name}</p>
                            <p className="plate-price">${plate.price}</p>
                                
                                <button 
                                className="plate-btn"
                                type="button"
                                id={plate.id}
                                onClick={ () => { 
                                    setCartList([...cartList, plate]); 
                                    document.getElementById(`${plate.id}`).innerHTML = "In Cart" ;
                                    document.getElementById(`${plate.id}`).setAttribute("disabled", true)
                                }}
                                >Add
                                </button>                      
                    
                        </div>
                    </div>
                ))            
            }    
        </div>
    )
}

export default Menu;