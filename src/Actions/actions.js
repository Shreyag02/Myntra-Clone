import {ADD_ITEM, DECREMENT, INCREMENT, REMOVE_ITEM} from './actions.types'

export const addItem = (product) => ({
    type: ADD_ITEM,
    payload: product,
});

export const removeItem = (id) => (
    {
    type: REMOVE_ITEM,
    payload: id,
    }
);

export const addCount = (id) => ({
    type: INCREMENT,
    payload: id,
});

export const decreaseCount = (id) => ({
    type: DECREMENT,
    payload: id,
});