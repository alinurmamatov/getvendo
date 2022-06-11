import { createContext, useReducer } from "react";
import * as actions from "./actions";


export const GeneralContext = createContext();
const initialValue = [];

const cartReducer = (state, action) => {
    switch(action.type) {
        case actions.ADDTOCART:
            return state  //we will add product to the cart
        case actions.REMOVEPRODUCT:
            return state  //we will filter to remove item
        default:
            return state
    }
}

const GeneralContextProvider = ({children}) => {
    const [cartProducts, dispatch] = useReducer(cartReducer, initialValue);

    const data = {
        dispatch,
        cartProducts
    }

    return (
        <GeneralContext.Provider value={data}>
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContextProvider;