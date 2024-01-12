const getStoredCart = () => {
    const storeCartString = localStorage.getItem('cart');
    if (storeCartString) {
        return JSON.parse(storeCartString)
    }
    return [];

}
const setCartToLS = cart => {
    const cartStingified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStingified);
}
const adddLS = id => {
    const cart = getStoredCart();
    cart.push(id)
    setCartToLS(cart)
}
export{adddLS,getStoredCart}