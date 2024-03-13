import { combineReducers } from 'redux';
import { CLOSE_WEBSOCKET, CONNECT_WEBSOCKET, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, UPDATE_FACTORY_LIST } from '../action/chartAction';
import { BaseConfig } from '../config/AppConfig';

// Reducer for handling API data fetching state
export const apiDataReducer = (state = { data: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Reducer for handling WebSocket state and factory list
const initialState = {
  wsState: BaseConfig.webSocketState.NOTCONNECTED,
  factoryList: [],
};

export const websocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET:
      return { ...state, wsState: BaseConfig.webSocketState.CONNECTING };
    case CLOSE_WEBSOCKET:
      return { ...state, wsState: BaseConfig.webSocketState.CLOSED };
    case UPDATE_FACTORY_LIST:
      return { ...state, factoryList: action.payload };
    default:
      return state;
  }
};


