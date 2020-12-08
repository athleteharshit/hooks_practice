import { act } from "react-dom/test-utils";
import { BUY_ICECREAM } from "./iceTypes"

const initialState = {
    numOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - action.payload
        }
        default: return state
    }
}

export default iceCreamReducer