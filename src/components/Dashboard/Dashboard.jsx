import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';
import GadgetCart from '../GadgetCart/GadgetCart';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allGadgets = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const addCartList = allGadgets.filter(gadget => storedCartList.includes(gadget.gadgetId));
        setCartList(addCartList);
    }, [allGadgets]);

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const addWishList = allGadgets.filter(gadget => storedWishList.includes(gadget.gadgetId));
        setWishList(addWishList);
    }, [allGadgets]);

    const calculateTotalCost = () => {
        return cartList.reduce((total, gadget) => total + gadget.price, 0);
    };

    const handleRemoveFromCart = (gadgetId) => {
        setCartList(prevCartList => prevCartList.filter(gadget => gadget.gadgetId !== gadgetId));
    };

    const handleRemoveFromWishlist = (gadgetId) => {
        setWishList(prevWishList => prevWishList.filter(gadget => gadget.gadgetId !== gadgetId));
    };

    const handleSortByPrice = () => {
        const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCartList);
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className='flex flex-col items-center py-5 text-center text-white bg-[#9538E2]'>
                <h3 className="text-5xl font-bold my-5">Dashboard</h3>
                <p className='w-2/5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <Tabs>
                <TabList className="flex space-x-4 justify-center bg-[#9538E2] py-5">
                    <Tab
                        selectedClassName="bg-white text-black "
                        className="btn rounded-full bg-[#9538E2] text-black px-10"
                    >
                        Cart
                    </Tab>
                    <Tab
                        selectedClassName="bg-white text-black "
                        className="btn rounded-full bg-[#9538E2] text-black px-10"
                    >
                        WishList
                    </Tab>
                </TabList>
                <TabPanel>
                    <div className='flex justify-between items-center my-10'>
                        <h2 className='text-3xl font-bold'>Cart: ({cartList.length})</h2>
                        <div className='flex items-center space-x-4'>
                            <h2 className='text-3xl font-bold'>
                                Total Cost: ${calculateTotalCost().toFixed(2)}
                            </h2>
                            <button
                                onClick={handleSortByPrice}
                                className="btn bg-[#9538E2] text-white rounded-lg px-4 py-2"
                            >
                                Sort By Price
                            </button>
                            <button
                                className="btn bg-[#3B82F6] text-white rounded-lg px-4 py-2"
                            >
                                Purchase
                            </button>
                        </div>
                    </div>
                    <div>
                        {cartList.map(gadget => (
                            <GadgetCart
                                key={gadget.gadgetId}
                                gadget={gadget}
                                onRemove={handleRemoveFromCart}
                                isWishlist={false}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2 className='text-3xl font-bold my-10'>WishList: ({wishList.length})</h2>
                    </div>
                    <div>
                        {wishList.map(gadget => (
                            <GadgetCart
                                key={gadget.gadgetId}
                                gadget={gadget}
                                onRemove={handleRemoveFromWishlist}
                                isWishlist={true}
                            />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;
