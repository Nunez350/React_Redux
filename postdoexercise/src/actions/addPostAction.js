import * as actionTypes from './actionTypes';

export const addPost = (data)=> {
    return {
        type:actionTypes.ADD_POST,
        data: data
    }
}
