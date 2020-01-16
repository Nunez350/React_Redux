import * as actionTypes from './actionTypes';

export const increment= (data)=> {
    return {
        type:actionTypes.INCREMENT,
        data: data
    }
}
