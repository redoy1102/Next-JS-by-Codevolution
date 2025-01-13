import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Sell Cakes</button>
            <button onClick={() => dispatch(restocked(2))}>Restocked cakes</button>
        </div>
    );
};

export default CakeView;