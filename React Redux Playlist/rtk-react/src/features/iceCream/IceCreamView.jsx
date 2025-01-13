import {useDispatch, useSelector} from 'react-redux'
import { ordered, restocked } from './iceCreamSlice';


const IceCreamView = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Ice creams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(ordered())}>Sell Ice cream</button>
            <button onClick={() => dispatch(restocked(2))}>Restocked cream</button>
        </div>
    );
};

export default IceCreamView;