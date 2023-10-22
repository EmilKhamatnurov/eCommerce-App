class LocalStorage {
	constructor({onStorageChange}) {
		this.cartItems = [];
		// userId?
		this.onStorageChange = onStorageChange;
		this.localStorage = localStorage;
	}
	_getCartItems = () => JSON.parse(localStorage.getItem('cart'));

	_deleteCartItem = (itemId) => {
		this.cartItems.splice(itemId,1);
		localStorage.setItem('cart', JSON.stringify(this.cartItems));
		this.onStorageChange(JSON.parse(localStorage.getItem('cart')));
	}

	_generateUserId = () => {
		this.onStorageChange(this.cartItems);
	}
	//! Нужно поменяь название массива на Add, потому что у нас должна быть функция сохранения элемента

	saveCartToLocalStorage = (item) => {
		this.cartItems.push(item);
		localStorage.setItem('cart', JSON.stringify(this.cartItems));
		this.onStorageChange(this.cartItems);
	}
}

export default LocalStorage