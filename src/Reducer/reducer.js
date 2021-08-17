import {ADD_ITEM, DECREMENT, INCREMENT, REMOVE_ITEM} from '../Actions/actions.types'

const reducer =(state = [], action) => {

    switch (action.type) {

        case ADD_ITEM:
            {
                if(state.find(product => product.id === action.payload.id))
                {
                    return state.map(product =>  product.id !== action.payload.id ? product : {...product, qty: product.qty+1});
                }
                return [...state, action.payload];
            }

        case REMOVE_ITEM:
            return state.filter(product => product.id !== action.payload);

        case INCREMENT:
            return state.map(product =>  product.id !== action.payload ? product : {...product, qty: product.qty+1});
        
        case DECREMENT:
            return state.map(product =>  product.id !== action.payload ? product : {...product, qty: product.qty-1});

        default:
            return state;
    }
}

export default reducer;