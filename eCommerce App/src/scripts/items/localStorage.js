class LocalStorage {
	constructor({onStorageChange}) {
		this.cartItems = [];
		this.onStorageChange = onStorageChange;
		this.localStorage = localStorage.setItem('cart', 'Пустая');
	}
	_getCartItems = () => {
		return this.cartItems
	}
	saveCartToLocalStorage = (item) => {
		this.cartItems.push(item);
		localStorage.setItem('cart', JSON.stringify(this.cartItems));
		this.onStorageChange(this.cartItems);
	}
}

export default LocalStorage