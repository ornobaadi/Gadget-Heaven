import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';
import GadgetCart from '../GadgetCart/GadgetCart';
import { Helmet } from 'react-helmet-async';
// import toast from 'react-hot-toast';

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

    const handleRemoveFromCart = (gadgetId) => {
        setCartList((prevCartList) => prevCartList.filter(gadget => gadget.gadgetId !== gadgetId));
        // toast.success("Item removed from cart");
    };

    const handleRemoveFromWishlist = (gadgetId) => {
        setWishList((prevWishList) => prevWishList.filter(gadget => gadget.gadgetId !== gadgetId));
        // toast.success("Item removed from wishlist");
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className='flex flex-col items-center py-5 text-center text-white bg-[#9538E2]'>
                <h3 className="text-5xl font-bold my-5">Dashboard</h3>
                <p className='w-2/5'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <Tabs>
                <TabList className="flex space-x-4 justify-center bg-[#9538E2] py-5">
                    <Tab selectedClassName="bg-white text-black" className="btn rounded-full bg-[#9538E2] text-black px-10">
                        Cart
                    </Tab>
                    <Tab selectedClassName="bg-white text-black" className="btn rounded-full bg-[#9538E2] text-black px-10">
                        WishList
                    </Tab>
                </TabList>
                
                {/* Cart Tab */}
                <TabPanel>
                    <div className='flex justify-between'>
                        <h2 className='text-3xl font-bold my-10'>Cart: ({cartList.length})</h2>
                        <h2 className='text-3xl font-bold my-10'>Total cost: {/* Calculate total cost here */}</h2>
                    </div>
                    {cartList.map(gadget => (
                        <GadgetCart
                            key={gadget.gadgetId}
                            gadget={gadget}
                            onRemove={handleRemoveFromCart}
                            isWishlist={false}
                        />
                    ))}
                </TabPanel>
                
                {/* Wishlist Tab */}
                <TabPanel>
                    <div>
                        <h2 className='text-3xl font-bold my-10'>WishList : ({wishList.length})</h2>
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
