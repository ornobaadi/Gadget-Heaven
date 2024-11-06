import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Statistics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
            .then((response) => response.json())
            .then((gadgets) => {

                const chartData = gadgets.map((gadget) => ({
                    name: gadget.title,
                    price: gadget.price,
                }));
                setData(chartData);
            })
            .catch((error) => console.error('Error fetching gadgets:', error));
    }, []);

    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>

            <div className="flex flex-col items-center py-5 text-center mt-5 text-white bg-[#9538E2]">
                <h3 className="text-5xl font-bold my-5">Statistics</h3>
                <p className="w-2/5">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div className="mt-10 px-5">
                <h2 className="text-center text-3xl font-semibold mb-6">Gadget Prices Chart</h2>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#9538E2" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
