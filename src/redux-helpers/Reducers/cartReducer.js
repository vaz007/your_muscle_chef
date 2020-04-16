import {
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_PRICE,
    DECREMENT_QTY
} from '../Actions/types.js';

const initialState = {
    cartItems : [],
    totalPrice : 0
}
  
export default (state = initialState, action) => {
    switch (action.type){
        case "FETCH_DATA":
       return { ...state, dataArray: action.payload };
        case ADD_ITEM:
            const isAlreadyAdded = state.cartItems.find(
                 product => product.id === action.payload.id)
            if (!isAlreadyAdded) action.payload.qty = 1

            return{
                ...state,
                cartItems: !isAlreadyAdded
                 ?[action.payload, ...state.cartItems]
                 : state.cartItems.map(
                     item => 
                        item.id === action.payload.id
                         ? {...item, qty: ++item.qty}
                         :item
                 )
            }
    
    // Delete Item 

    case DELETE_ITEM:
        return {
            ...state,
            cartItems : state.cartItems.filer(item => item.id !== action.payload)
        }


    // Decrement Qty

    
    case DECREMENT_QTY: 
        return {
            ...state,
            cartItems: state.cartItems.map(
                item => item.id === action.payload.id ? {...item, qty: --item.qty} : item
            )
        }

    // Update the final Price

    case UPDATE_PRICE:
        return {
            ...state, 
            totalPrice: state.cartItems
            .reduce((acc, val)=> acc + val.qty * val.price, 0)
            .toFixed(2)
        }

    default:
        return state
    }




}