import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return Object.assign({},state,{
        cartItems:[...state.cartItems, action.payload]
      })

      break;
    case REMOVE_FROM_CART:
      //TODO
      let filterItem = state.cartItems.find(el => el.itemId !== action.payload)
      console.log(filterItem)
      return Object.assign({},state,{
        cartItems:state.cartItems.find(el => el.itemId !== action.payload)
      })
      // state.notifications.slice(1)
      break;
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      //TODO

      break;
    default:
      return state;
  }
}

export default itemReducer;