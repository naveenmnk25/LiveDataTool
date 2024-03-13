// store.js
import {  configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import websocketMiddleware from './common/WebSocket';
import { apiDataReducer, websocketReducer } from './reducers/chartReducers';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  websocket: websocketReducer,
  apiData: apiDataReducer
}

const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware(), websocketMiddleware],
  devTools: true,
})

export default store;
