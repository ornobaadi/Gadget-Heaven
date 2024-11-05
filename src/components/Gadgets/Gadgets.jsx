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
        <div className="mt-[550px] mb-32">
            <h2 className="text-4xl text-center font-bold mb-20">
                Explore Cutting-Edge Gadgets
            </h2>
            <div className="flex">
                {/* Category Buttons */}
                <div className="flex flex-col items-start border-2 rounded-lg p-8 gap-2">
                    <button onClick={() => handleCategoryClick("All")} 
                    className={`btn w-40 ${selectedCategory === "All" ? " bg-[#9538E2] text-white  " : ""}`}>All</button>
                    <button onClick={() => handleCategoryClick("Laptops")} 
                    className={`btn w-40 ${selectedCategory === "Laptops" ? "bg-[#9538E2] text-white " : ""}`}>Laptops</button>
                    <button onClick={() => handleCategoryClick("Smartphones")} 
                    className={`btn w-40 ${selectedCategory === "Smartphones" ? "bg-[#9538E2] text-white" : ""}`}>Smartphones</button>
                    <button onClick={() => handleCategoryClick("Accessories")} 
                    className={`btn w-40 ${selectedCategory === "Accessories" ? "bg-[#9538E2] text-white" : ""}`}>Accessories</button>
                    <button onClick={() => handleCategoryClick("Smartwatches")} 
                    className={`btn w-40 ${selectedCategory === "Smartwatches" ? "bg-[#9538E2] text-white" : ""}`}>Smartwatches</button>
                </div>
                <div className={`ml-10 ${filteredGadgets.length > 0 ? 'grid grid-cols-1 lg:grid-cols-3 gap-10' : ''}`}>
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => (
                            <Gadget gadget={gadget} key={gadget.gadgetId} />
                        ))
                    ) : (
                        <p className="pl-96 mt-32 text-5xl text-center font-bold">No Data Found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;