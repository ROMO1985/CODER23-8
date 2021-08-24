import { TYPE } from "../ShoppingAcction/shoppingAction";

export const  ShoppingInitialState = {
    productos:[
        {id: 1, name: "producto 1", price: 140},
        {id: 2, name: "producto 2", price: 120},
        {id: 3, name: "producto 3", price: 150},
        {id: 4, name: "producto 4", price: 400},
        {id: 5, name: "producto 5", price: 10},
        {id: 6, name: "producto 6", price: 20},
        
    ],
    cart:[],

}
export function shoppingReducer(state, action){

switch (action.type) 
    {
    case TYPE.ADD_TO_CART: {
        let newItem = state.productos.find(
            (productos) => productos.id === action.payload
          );
         
          let itemInCart = state.cart.find((item) => item.id === newItem.id);

          return itemInCart
            ? {
                ...state,
                cart: state.cart.map((item) =>
                  item.id === newItem.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
        
            }
            : {
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1 }],
        
            };
        };
    

    case TYPE.REMOVE_ONE_FROM_CART:
    {let itemToDelete = state.cart.find(item=>item.id===action.payload);
    return itemToDelete.quantity >1 ? {...state,
    cart:state.cart.map(item=>item.id=== action.payload? {...item,quantity:item.quantity-1}:item),}
    :{...state,cart: state.cart.filter(item=> item.id!==action.payload),}
    
    }
    case TYPE.REMOVE_ALL_FROM_CART:
    {return {...state,cart: state.cart.filter(item=> item.id!==action.payload),}}
    case TYPE.CLEAR_CART:
    {return ShoppingInitialState} 
    }}