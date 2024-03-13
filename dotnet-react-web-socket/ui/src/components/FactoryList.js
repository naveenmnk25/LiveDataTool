import React, { useContext, useEffect, useState } from 'react';
import { WebSocketContext } from '../context/WebSocket';
import StockMarketChart from './StockMarketChart';

export default function FactoryList() {
  const { factoryList } = useContext(WebSocketContext);
  const [stockData, setStockData] = useState([]);

    useEffect(() => {
      setStockData(factoryList);
      console.log(factoryList);
    }, [factoryList]);

  return (
    <div className="h-100 d-flex flex-row justify-content-center align-items-center">
      <div>
      <StockMarketChart  stockData={stockData}/>
      </div>
    </div>
  );
}
