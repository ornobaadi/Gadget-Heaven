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

const getStoredFavList = () => {
    // Cart-list 
    const storedFavListStr = localStorage.getItem('fav-list');
    if(storedFavListStr) {
        const storedFavList = JSON.parse(storedFavListStr);
        return storedFavList;
    }
    else{
        return [];
    }
}
const addToStoredFavList = (id) => {
    const storedFavList = getStoredFavList();
    if(storedFavList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedFavList.push(id);
        const storedFavListStr = JSON.stringify(storedFavList);
        localStorage.setItem('fav-list', storedFavListStr)
    }
}




export { addToStoredCartList , addToStoredFavList}