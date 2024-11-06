import { removeFromStoredCartList, removeFromStoredWishList, addToStoredCartList } from '../../utility/addToDb';
import toast from 'react-hot-toast';

const GadgetCart = ({ gadget, onRemove, isWishlist, onMoveToCart }) => {
    const handleRemove = () => {
        if (isWishlist) {
            removeFromStoredWishList(gadget.gadgetId);
            toast.success("Item removed from wishlist"); // Move toast here
        } else {
            removeFromStoredCartList(gadget.gadgetId);
            toast.success("Item removed from Cart"); // Move toast here
        }
        onRemove(gadget.gadgetId);
    };

    const handleMoveToCart = () => {
        if (onMoveToCart) {
            addToStoredCartList(gadget.gadgetId);
            onMoveToCart(gadget.gadgetId);
        }
    };

    const { gadgetId, image, title, price, description } = gadget;
    return (
        <div className="card card-compact bg-base-100 mx-16 shadow-xl mb-10">
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <figure>
                        <img
                            src={image}
                            className="h-[200px]"
                            alt={title} />
                    </figure>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl m-3 font-bold">{title}</h1>
                        <p className="text-xl m-3">{description}</p>
                        <p className="text-xl m-3 font-bold">Price: ${price}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <button onClick={handleRemove} className="btn btn-error rounded-full btn-outline">
                        {isWishlist ? 'Remove from Wishlist' : 'Remove from Cart'}
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
                    
                    {isWishlist && (
                        <button
                            onClick={handleMoveToCart}
                            className="btn btn-success rounded-full btn-outline"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GadgetCart;
