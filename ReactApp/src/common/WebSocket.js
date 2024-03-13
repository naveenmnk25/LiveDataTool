// middleware.js

import { CONNECT_WEBSOCKET, FETCH_DATA_REQUEST, fetchDataFailure, fetchDataSuccess } from "../action/chartAction";
import { BaseConfig } from "../config/AppConfig";

const websocketMiddleware = () => {
  let socket = null;

  return (store) => (next) => (action) => {
    switch (action.type) {
      case CONNECT_WEBSOCKET:
        if (!socket || socket.readyState !== WebSocket.OPEN) {
          socket = new WebSocket(BaseConfig.wsUrl);

          socket.onopen = () => {
            console.log('WebSocket connection established.');
          };

          socket.onmessage = (event) => {
            console.log('Message received:', event.data);
            store.dispatch(fetchDataSuccess(JSON.parse(event.data)));
          };

          socket.onclose = () => {
            console.log('WebSocket connection closed.');
          };

          socket.onerror = (error) => {
            console.error('WebSocket error:', error);
          };
        }
        break;

      case FETCH_DATA_REQUEST:
        // Perform API data fetching here
        fetch(BaseConfig.wsUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            store.dispatch(fetchDataSuccess(data));
          })
          .catch((error) => {
            store.dispatch(fetchDataFailure(error.message));
          });
        break;

      default:
        return next(action);
    }
  };
};

export default websocketMiddleware;
