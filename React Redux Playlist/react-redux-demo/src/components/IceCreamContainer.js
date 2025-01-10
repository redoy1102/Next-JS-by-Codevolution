import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buy_ice_cream } from '../redux/ice_cream/iceCreamActions'

const IceCreamContainer = () => {

    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Number of ice cream - {numOfIceCreams}</h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => dispatch(buy_ice_cream(number))}>Buy {number} Ice cream</button>
        </div>
    );
};

export default IceCreamContainer;