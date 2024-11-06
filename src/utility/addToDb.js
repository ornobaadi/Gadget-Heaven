import toast from "react-hot-toast";

const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('cart-list');
    return storedCartListStr ? JSON.parse(storedCartListStr) : [];
};

const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    if (storedCartList.includes(id)) {
        toast.error("Item already exists in the cart");
    } else {
        storedCartList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(storedCartList));
        toast.success("Item added to cart");
    }
};

// Remove toast from utility function
const removeFromStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    const updatedCartList = storedCartList.filter(itemId => itemId !== id);
    localStorage.setItem('cart-list', JSON.stringify(updatedCartList));
};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('fav-list');
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.error("Item already exists in the wishlist");
    } else {
        storedWishList.push(id);
        localStorage.setItem('fav-list', JSON.stringify(storedWishList));
        toast.success("Item added to wishlist");
    }
};

// Remove toast from utility function
const removeFromStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    const updatedWishList = storedWishList.filter(itemId => itemId !== id);
    localStorage.setItem('fav-list', JSON.stringify(updatedWishList));
};

export {
    addToStoredCartList,
    addToStoredWishList,
    getStoredCartList,
    getStoredWishList,
    removeFromStoredCartList,
    removeFromStoredWishList
};