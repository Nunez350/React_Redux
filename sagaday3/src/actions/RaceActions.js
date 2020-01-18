
import * as ActionTypes from './ActionTypes';

export const startIt = () => {
    return {
      type: ActionTypes.START,
      
    }
  }
  
  export const stopIt = () => {
    console.log("stop ")
    return { type: ActionTypes.STOP }
  }
  
