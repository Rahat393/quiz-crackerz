import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    const chartData = useLoaderData();
    // console.log(chartData)
    return (
        <div>
            {
                chartData.data.map(data => <Chart key={data.id}
                    data={data}></Chart>)
            }
        </div>
    );
};

export default Statistics;