import React, { useEffect } from 'react';
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector ,connect} from 'react-redux';
import { websocketReducer } from '../../reducers/chartReducers';
import { BaseConfig } from '../../config/AppConfig';

const GraphComponent = (connectWebsocket) => {
  // Accessing state from Redux store
  const websocketState = useSelector(state => state.websocket);
  const apiDataState = useSelector(state => state.apiData);
  const StateAlerts = {
    CONNECTING: <Alert variant="info">Connecting...</Alert>,
    OPEN: <Alert variant="success">Connection established!</Alert>,
    CLOSING: <Alert variant="warning">Connection is closing...</Alert>,
    CLOSED: <Alert variant="danger">Connection is closed!</Alert>,
    NOTCONNECTED: <Alert variant="secondary">Not connected yet!</Alert>,
  };
  useEffect(() => {
    // Dispatch the CONNECT_WEBSOCKET action when the component mounts
    websocketReducer(BaseConfig.webSocketState.OPEN);
  }, [connectWebsocket]); // Add connectWebSocket to dependency array to avoid re-triggering effect


  return (
    <div className='mt-5'>
      <h2>WebSocket State</h2>
      <pre>{JSON.stringify(websocketState, null, 2)}</pre>

      <h2>API Data State</h2>
      <pre>{JSON.stringify(apiDataState, null, 2)}</pre>


      {/* <Container>
        <Row className="my-5">
          <Col>{[StateAlerts[Object.keys(BaseConfig.webSocketState).find(index => BaseConfig.webSocketState[index] === wsState)]]}</Col>
        </Row>
        <Row className="my-5 d-flex flex-row justify-content-center align-items-center">
          <Col className="d-flex justify-content-center">
            <Button
              variant="success"
              disabled={BaseConfig.webSocketState.CLOSED !== wsState && BaseConfig.webSocketState.NOTCONNECTED !== wsState}
              onClick={() => { connectWs(); }}
            >
              Start Connection
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button
              variant="secondary"
              disabled={BaseConfig.webSocketState.OPEN !== wsState}
              onClick={() => { closeWs(); }}
            >
              End Connection
            </Button>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default GraphComponent;
