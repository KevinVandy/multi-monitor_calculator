import { SET_LOADING, LOAD_DEFAULT_SETUP } from '../types';

export default (state: any, action : any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOAD_DEFAULT_SETUP:
      return {
        ...state,
        monitors: action.payload,
        loading: false
      };
    default:
      return state;
  };
};