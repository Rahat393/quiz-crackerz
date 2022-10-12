import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
    const { name, total } = data;

    return (
        <div>
            <LineChart width={500} height={500}  >
                <Line type="monotone" dataKey='total' stroke="#82ca9d"></Line>
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Chart;