const getStoredCartList = () => {
    // Cart-list 
    const storedCartListStr = localStorage.getItem('cart-list');
    if(storedCartListStr) {
        const storedCartList = JSON.parse(storedCartListStr);
        return storedCartList;
    }
    else{
        return [];
    }
}
const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    if(storedCartList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedCartList.push(id);
        const storedCartListStr = JSON.stringify(storedCartList);
        localStorage.setItem('cart-list', storedCartListStr)
    }
}

const getStoredWishList = () => {
    // Cart-list 
    const storedWishListStr = localStorage.getItem('fav-list');
    if(storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}
const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('fav-list', storedWishListStr)
    }
}




export { addToStoredCartList , addToStoredWishList, getStoredCartList, getStoredWishList}