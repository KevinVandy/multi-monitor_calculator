import React, {useReducer} from 'react';
import MonitorContext from './monitorContext';
import MonitorReducer from './monitorReducer';
import { SET_LOADING, LOAD_DEFAULT_SETUP } from '../types';

const MonitorState = (props: any) => {

  const intitialState = {
    monitors: [],
    loading: false
  };

  const [state, dispatch] = useReducer(MonitorReducer, intitialState);

  //methods
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const loadDefaultSetup = async () => {
    setLoading();

    dispatch({
      type: LOAD_DEFAULT_SETUP,
      payload: []
    });
  };

  return (
    <MonitorContext.Provider
      value={{
        //state
        loading: state.loading,
        monitors: state.monitors,
        //methods
        loadDefaultSetup
      }}
    >
      {props.children}
    </MonitorContext.Provider>
  );

};

export default MonitorState;