import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");



    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data);
                setFilteredGadgets(data);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredGadgets(gadgets);
        }
        else {
            const filtered = gadgets.filter(gadget => gadget.category === category);
            setFilteredGadgets(filtered);
        }
    };

    return (
        <div className="mt-96 mb-32">
            <h2 className="text-4xl text-center font-bold mb-20">
                Explore Cutting-Edge Gadgets
            </h2>
            <div className="flex">
                {/* Category Buttons */}
                <div className="flex flex-col items-start border-2 rounded-lg p-8">
                    <button onClick={() => handleCategoryClick("All")} className="btn">All</button>
                    <button onClick={() => handleCategoryClick("Laptops")} className="btn">Laptops</button>
                    <button onClick={() => handleCategoryClick("Smartphones")} className="btn">Smartphones</button>
                    <button onClick={() => handleCategoryClick("Accessories")} className="btn">Accessories</button>
                    <button onClick={() => handleCategoryClick("Smartwatches")} className="btn">Smartwatches</button>
                </div>
                <div className={`ml-10 ${filteredGadgets.length > 0 ? 'grid grid-cols-1 lg:grid-cols-3 gap-10' : ''}`}>
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => (
                            <Gadget gadget={gadget} key={gadget.gadgetId} />
                        ))
                    ) : (
                        <p className="pl-[32rem] mt-32 text-5xl text-center font-bold col-span-full">No Data Found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;