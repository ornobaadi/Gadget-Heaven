import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
        <div className="mt-96">
            <h2 className="text-4xl text-center font-bold mb-20">Explore Cutting-Edge Gadgets ({gadgets.length})</h2>
            <div className="flex">
                <div className="flex flex-col items-start border-2 rounded-lg p-8">
                    <button className="btn">All</button>
                    <button className="btn">Laptops</button>
                    <button className="btn">Smartphones</button>
                    <button className="btn">Accessories</button>
                    <button className="btn">Smartwatches</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.gadgetId}></Gadget>)
                }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;