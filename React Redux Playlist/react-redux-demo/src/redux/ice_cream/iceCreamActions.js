import { BUY_ICE_CREAM } from "./iceCreamTypes";
import { SELL_ICE_CREAM } from "./iceCreamTypes";

export const buy_ice_cream = () => {
    return {
        type: BUY_ICE_CREAM
    }
}

export const sell_ice_cream = () => {
    return {
        type: SELL_ICE_CREAM
    }
}