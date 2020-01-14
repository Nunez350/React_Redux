import * as actionTypes from './actionTypes';

export const deleteResult  = (resElid) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElid
    }
}
