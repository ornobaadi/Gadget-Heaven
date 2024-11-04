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

const getStoredwishList = () => {
    // Cart-list 
    const storedwishListStr = localStorage.getItem('fav-list');
    if(storedwishListStr) {
        const storedwishList = JSON.parse(storedwishListStr);
        return storedwishList;
    }
    else{
        return [];
    }
}
const addToStoredwishList = (id) => {
    const storedwishList = getStoredwishList();
    if(storedwishList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedwishList.push(id);
        const storedwishListStr = JSON.stringify(storedwishList);
        localStorage.setItem('fav-list', storedwishListStr)
    }
}




export { addToStoredCartList , addToStoredwishList, getStoredCartList, getStoredwishList}