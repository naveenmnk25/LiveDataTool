// actions.js
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const CLOSE_WEBSOCKET = 'CLOSE_WEBSOCKET';
export const UPDATE_FACTORY_LIST = 'UPDATE_FACTORY_LIST';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const connectWebSocket = () => ({ type: CONNECT_WEBSOCKET });
export const closeWebSocket = () => ({ type: CLOSE_WEBSOCKET });
export const updateFactoryList = (data) => ({ type: UPDATE_FACTORY_LIST, payload: data });
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });
