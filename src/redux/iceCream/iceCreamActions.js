const { BUY_ICECREAM } = require("./iceTypes")

export const buyIceCream = (number = 1) => {
    console.log(number);
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}