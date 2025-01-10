import React from 'react';
import {connect} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

const CakeContainer = (props) => {
    console.log(props.numOfCakes);
    
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            {
                props.numOfCakes > 0 && <button onClick={props.buyCake}>Buy cake</button>
            }
        </div>
    );
    
};

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


// Connect function connect react component to redux store
export default connect(
    mapStateToProps, 
    mapDispatchToProps
) (CakeContainer)