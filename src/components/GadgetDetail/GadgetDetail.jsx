import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCartList, addToStoredWishList } from "../../utility/addToDb";
import { Helmet } from 'react-helmet-async';

const GadgetDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { gadgetId } = useParams();
    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.gadgetId === gadgetId)

    console.log(gadget);

    const { image, title, price, description, specification, rating, availablility } = gadget;

    const handleAddToCart = (id) => {
        addToStoredCartList(id);
    }

    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleAddToFav = (id) => {
        addToStoredWishList(id);
        setIsWishlisted(true);
    }



    return (
        <div>
            <Helmet>
                <title>{title} | Gadget Heaven</title>
            </Helmet>
            <div>
                <div className=" relative hero bg-[#9538E2] mt-5 py-5">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold">Product Details</h1>
                            <p className="py-6 pb-40">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h2>Gadget Details: {currentGadget}</h2> */}
            <div className=" hero bg-base-200 min-h-[500px]">
                <div className="absolute bg-white top-72 hero-content border-2 rounded-xl p-10 flex-col lg:flex-row gap-16">
                    <img
                        src={image}
                        className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="pt-5 pb-3 text-xl font-bold">Price: $ {price}</p>
                        <p className="btn btn-sm rounded-full text-[#309C08] border-[#309C08]">{availablility} In Stock</p>
                        <p className="py-3 text-md">{description}</p>
                        <p className="py-2 text-lg font-bold">Specification: </p>
                        <ol style={{ listStyleType: "decimal" }} className="px-6 pb-5">
                            {specification.map((item, index) => (
                                <li
                                    className="text-lg"
                                    key={index}>{item}</li>
                            ))}
                        </ol>
                        <p className="pb-2 text-lg font-bold">Rating</p>
                        <div className="flex gap-5">
                            <div className="rating">
                                <input type="radio" name="rating-4 " className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                            </div>
                            <p>{rating}</p>
                        </div>
                        <div className="mt-5 flex gap-2">
                            <button onClick={() => handleAddToCart(gadgetId)} className="btn rounded-full bg-[#9538E2] hover:text-black text-white">Add to cart
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                            </button>
                            <button onClick={() => handleAddToFav(gadgetId)} className="btn rounded-full"
                                disabled={isWishlisted}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;