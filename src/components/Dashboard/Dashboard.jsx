import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { 
    getStoredCartList, 
    getStoredWishList, 
    addToStoredCartList, 
    removeFromStoredWishList, 
    removeFromStoredCartList 
} from '../../utility/addToDb';
import GadgetCart from '../GadgetCart/GadgetCart';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allGadgets = useLoaderData();
    const navigate = useNavigate();

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
        removeFromStoredCartList(gadgetId);
    };

    const handleRemoveFromWishlist = (gadgetId) => {
        setWishList(prevWishList => prevWishList.filter(gadget => gadget.gadgetId !== gadgetId));
        removeFromStoredWishList(gadgetId);
    };

    const handleMoveToCart = (gadgetId) => {
        const gadget = wishList.find(gadget => gadget.gadgetId === gadgetId);
        if (gadget) {
            handleRemoveFromWishlist(gadgetId);
            setCartList(prevCartList => [...prevCartList, gadget]);
            addToStoredCartList(gadgetId);
        }
    };

    const handleSortByPrice = () => {
        const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCartList);
    };

    const handlePurchaseClick = () => {
        document.getElementById('purchase_modal').showModal();
    };

    const handleCloseModal = () => {
        setCartList([]);
        cartList.forEach(gadget => removeFromStoredCartList(gadget.gadgetId));
        document.getElementById('purchase_modal').close();
        navigate("/"); 
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className='flex flex-col items-center py-5 text-center mt-5 text-white bg-[#9538E2]'>
                <h3 className="text-5xl font-bold my-5">Dashboard</h3>
                <p className='w-2/5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <Tabs>
                <TabList className="flex space-x-4 justify-center bg-[#9538E2] py-5">
                    <Tab selectedClassName="bg-white text-black" className="btn rounded-full bg-[#9538E2] text-black px-10">Cart</Tab>
                    <Tab selectedClassName="bg-white text-black" className="btn rounded-full bg-[#9538E2] text-black px-10">WishList</Tab>
                </TabList>
                
                {/* Cart Tab Panel */}
                <TabPanel>
                    <div className='flex justify-between items-center my-10'>
                        <h2 className='text-3xl font-bold'>Cart: ({cartList.length})</h2>
                        <div className='flex items-center space-x-4'>
                            <h2 className='text-3xl font-bold'>
                                Total Cost: ${calculateTotalCost().toFixed(2)}
                            </h2>
                            <button onClick={handleSortByPrice} className="btn btn-outline text-[#9538E2] border-[#9538E2] rounded-full px-4 py-2">
                                Sort By Price
                            </button>
                            <button onClick={handlePurchaseClick} className="btn bg-[#9538E2] text-white rounded-full px-4 py-2">
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

                {/* WishList Tab Panel */}
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
                                onMoveToCart={handleMoveToCart}
                            />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>

            {/* Purchase Modal */}
            <dialog id="purchase_modal" className="modal">
                <div className="modal-box flex flex-col items-center">
                    <img src="/assets/Group.png" alt="" />
                    <h3 className="font-bold text-lg my-4">Thank you for your purchase!</h3>
                    <h3 className="font-bold text-lg">Total : ${calculateTotalCost().toFixed(2)}</h3>
                    <p className="my-4">Your order will be delivered within 24hours</p>
                    <div className="modal-action">
                        <button onClick={handleCloseModal} className="btn btn-wide">Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;
