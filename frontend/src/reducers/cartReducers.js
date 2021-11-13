import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case CART_ADD_ITEM: 

            const item = action.payload

            const existItem = state.cartItems.find(x => x.productID === item.productID)

            // if item already in cart then only update quantity of item
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(i => i.productID === item.productID ? item : i)
                }
            } else { // add new added item into cart
                return { 
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }  
        case CART_REMOVE_ITEM:
            const id = action.payload
            return {
                ...state,
                cartItems:state.cartItems.filter(i => i.productID !== id)
            }
        default:
            return state
    }
}