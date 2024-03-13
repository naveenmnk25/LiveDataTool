import React, { useContext, useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { WebSocketContext } from '../context/WebSocket';

export default function FactoryList() {
  const { factoryList } = useContext(WebSocketContext);
  const [stockData, setStockData] = useState([
    { timestamp: '2024-03-10 09:00:00', price: 100 },
    { timestamp: '2024-03-10 09:30:00', price: 110 },
    { timestamp: '2024-03-10 10:00:00', price: 105 },
    { timestamp: '2024-03-10 10:30:00', price: 120 },
    { timestamp: '2024-03-10 11:00:00', price: 115 },
    { timestamp: '2024-03-10 11:30:00', price: 118 },
    { timestamp: '2024-03-10 12:00:00', price: 112 },
    { timestamp: '2024-03-10 12:30:00', price: 125 },
    { timestamp: '2024-03-10 13:00:00', price: 130 },
    { timestamp: '2024-03-10 13:30:00', price: 127 },
]);
  useEffect(() => {
    setStockData(factoryList);
    console.log(stockData);
  }, [factoryList]);

  return (
    <div className="h-100 d-flex flex-row justify-content-center align-items-center">
      {Array.isArray(factoryList) &&
        factoryList.length > 0 &&
        factoryList.map((element, index) => (
          <tr key={index}>
            <td>{element.Name}</td>
          </tr>
        ))}
        <div>
            <Plot
                data={[
                    {
                        x: stockData.map(data => data.timestamp),
                        y: stockData.map(data => data.price),
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'rgb(75, 192, 192)' },
                        name: 'Stock Price',
                    }
                ]}
                layout={{
                    title: 'Stock Market Chart',
                    xaxis: {
                        title: 'Timestamp',
                        autorange: true,
                        type: 'date'
                    },
                    yaxis: {
                        title: 'Price ($)',
                        autorange: true,
                        type: 'linear'
                    },
                }}
            />
        </div>
    </div>
  );
}
