import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buy_ice_cream } from '../redux/ice_cream/iceCreamActions'

const IceCreamContainer = () => {

    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Number of ice cream - {numOfIceCreams}</h1>
            <button onClick={() => dispatch(buy_ice_cream())}>Buy Ice cream</button>
        </div>
    );
};

export default IceCreamContainer;