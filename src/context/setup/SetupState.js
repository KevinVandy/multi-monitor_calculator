import React, { useReducer } from 'react';
import Axios from 'axios';
import SetupContext from './SetupContext';
import SetupReducer from './SetupReducer';
import { SET_LOADING, LOAD_DEFAULT_SETUP } from '../types';

const SetupState = (props) => {

  const initialState = {
    loading: false,
    monitors: []
  };

  const [state, dispatch] = useReducer(SetupReducer, initialState);

  //methods
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const loadDefaultSetup = async () => {
    setLoading();

    const res = await Axios.get(
      '/defaultsetup.json'
    );

    dispatch({
      type: LOAD_DEFAULT_SETUP,
      payload: res.data.items
    });
  };

  return (
    <SetupContext.Provider
      value={{
        loading: state.loading,
        monitors: state.monitors,
        loadDefaultSetup
      }}
    >
      {props.children}
    </SetupContext.Provider>
  );

};

export default SetupState;