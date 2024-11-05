import toast from 'react-hot-toast';

const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('cart-list');
    if (storedCartListStr) {
        const storedCartList = JSON.parse(storedCartListStr);
        return storedCartList;
    } else {
        return [];
    }
};

const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    if (storedCartList.includes(id)) {
        toast.error('Item is already in the cart!');
    } else {
        storedCartList.push(id);
        const storedCartListStr = JSON.stringify(storedCartList);
        localStorage.setItem('cart-list', storedCartListStr);
        toast.success('Added to Cart!');
        updateCartIndicator(storedCartList.length);
    }
};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('fav-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.error('Item is already in the wishlist!');
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('fav-list', storedWishListStr);
        toast.success('Added to Wishlist!');
        updateWishlistIndicator(storedWishList.length);
    }
};

const updateCartIndicator = (count) => {
    const cartIndicator = document.querySelector('.cart-indicator');
    if (cartIndicator) {
        cartIndicator.textContent = count;
    }
};

const updateWishlistIndicator = (count) => {
    const wishlistIndicator = document.querySelector('.wishlist-indicator');
    if (wishlistIndicator) {
        wishlistIndicator.textContent = count;
    }
};

export { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList };
