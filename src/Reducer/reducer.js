import {ADD_ITEM, REMOVE_ITEM} from '../Actions/actions.types'

const initialState = [];

const reducer =(state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
                {
                    return [...state, action.payload]
                };
        case REMOVE_ITEM:
            return state.filter((product) => product.id !== action.payload);
        default:
            return state;
    }
}

export default reducer