import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
    // Here useSelector function receives a function called selector function which will take state as argument
    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    const dispatch = useDispatch()
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>Number of cakes - {numOfCakes}</h1>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
        </div>
    );
};

export default HooksCakeContainer;