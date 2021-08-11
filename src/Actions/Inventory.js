import {ADD_ITEM, REMOVE_ITEM} from './actions.types'

export const addItem = (product) => ({
    type: ADD_ITEM,
    payload: product,
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id,
});