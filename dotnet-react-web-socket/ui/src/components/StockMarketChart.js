import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
 
const StockMarketChart = (props) => {
    const [stockData, setStockData] = useState(props.stockData);
    useEffect(() => {
        setStockData(props.stockData);
        console.log("stockData",stockData);
      }, [props.stockData]);
    return (
        <div>
            <Plot
                data={[
                    {
                        x: stockData.map(data => data.Timestamp),
                        y: stockData.map(data => data.Price),
                        type: 'scatter',
                        mode: 'lines',
                        line: {color: '#17BECF'},
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
    );
};
 
export default StockMarketChart;