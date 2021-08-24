import React, { useReducer } from 'react'
import { TYPE } from '../ShoppingAcction/shoppingAction'
import Cart from './Cart'
import ProductItem from './ProductItem'
import { ShoppingInitialState, shoppingReducer } from './shoppingReduce'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


const ShoppingCard = () => {
   
    const [state, dispatch] = useReducer (shoppingReducer, ShoppingInitialState)
   
    const {productos, cart} = state
    
    const addToCart = (id) => {
        console.log(id)
        dispatch({type: TYPE.ADD_TO_CART,payload:id});

        
    }  
    const clearCart = () => { dispatch({type: TYPE.CLEAR_CART})}  

    const delFromCart = (id,all = false) => {
        console.log ( id,all)
        if ( all){dispatch({type:TYPE.REMOVE_ALL_FROM_CART,payload:id})}
        else{dispatch({type:TYPE.REMOVE_ONE_FROM_CART,payload:id})}
    }


    return (
        <div>
      
                <h2>Carrito de Compras</h2>
                <h3>Productos</h3>
                <article className="box grid-responsive"> 
                 {productos.map((product)=> 
                <ProductItem key={product.id} data={product} addToCart={addToCart}/>)} 
                </article> 
                <h3>Carrito</h3>
                <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>    
                {
                    cart.map((item,index)=><Cart key={index} data={item} delFromCart={delFromCart} />)
                }
                </article>

        </div>
    )
}

export default ShoppingCard
