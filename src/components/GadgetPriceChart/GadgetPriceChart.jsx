// GadgetPriceChart.jsx
import React from 'react';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';

const GadgetPriceChart = ({ cartList }) => {
    // Map cart list to required data structure
    const data = cartList.map(gadget => ({
        name: gadget.title,
        price: gadget.price,
    }));

    return (
        <div className="my-5">
            <h3 className="text-xl font-bold text-center">Price vs. Product Name</h3>
            <ComposedChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="price" barSize={20} fill="#413ea0" />
            </ComposedChart>
        </div>
    );
};

export default GadgetPriceChart;
