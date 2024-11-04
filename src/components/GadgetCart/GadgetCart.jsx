import { Link } from "react-router-dom";

const GadgetCart = ({ gadget }) => {

    const { gadgetId, image, title, price, description } = gadget;
    return (
        <div className="card card-compact bg-base-100 mx-16 shadow-xl mb-10">
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <figure>
                        <img
                            src={image}
                            className="h-[200px]"
                            alt="" />
                    </figure>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl m-3 font-bold">{title}</h1>
                        <p className="text-xl m-3">{description}</p>
                        <p className="text-xl m-3 font-bold">Price: ${price}</p>
                    </div>
                </div>
                <button className="btn btn-error rounded-full btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GadgetCart;