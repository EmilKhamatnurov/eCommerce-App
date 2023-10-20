class LocalStorage {
	constructor({onStorageChange}) {
		this.cartItems = [];
		// userId?
		this.onStorageChange = onStorageChange;
		this.localStorage = localStorage;
	}
	_getCartItems = () => JSON.parse(localStorage.getItem('cart'));
	
	_generateUserId = () => {
		
	}

	saveCartToLocalStorage = (item) => {
		this.cartItems.push(item);
		localStorage.setItem('cart', JSON.stringify(this.cartItems));
		this.onStorageChange(this.cartItems);
	}
}

export default LocalStorage