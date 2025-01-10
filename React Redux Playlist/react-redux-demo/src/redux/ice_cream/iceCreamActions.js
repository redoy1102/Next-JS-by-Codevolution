import { BUY_ICE_CREAM } from "./iceCreamTypes";
import { SELL_ICE_CREAM } from "./iceCreamTypes";

export const buy_ice_cream = (number = 1) => {
    return {
        type: BUY_ICE_CREAM,
        payload: number
        // By this payload we can sent information to reducer
    }
}

export const sell_ice_cream = () => {
    return {
        type: SELL_ICE_CREAM
    }
}