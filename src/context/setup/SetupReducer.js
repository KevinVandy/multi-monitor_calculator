    
import { SET_LOADING, LOAD_DEFAULT_SETUP } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOAD_DEFAULT_SETUP:
      return {
        ...state,
        loading: false,
        monitors: action.payload
      };
    default:
      return state;
  };
};