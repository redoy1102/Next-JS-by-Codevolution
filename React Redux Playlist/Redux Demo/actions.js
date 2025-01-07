import { BUY_CAKE, BUY_ICE } from "./actionTypes.js";

export function buy_cake() {
    return {
        type: BUY_CAKE,
        info: "I want to buy cake"
    }
}

export function buy_ice(){
    return {
        type: BUY_ICE,
        info: "I want to buy ice"
    }
}