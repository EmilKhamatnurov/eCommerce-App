class LocalStorage {
	constructor({onStorageChange}) {
		this.onStorageChange = onStorageChange;
		this.localStorage = localStorage;
	}
	_getCartItems = () => {
		if(JSON.parse(localStorage.getItem('cart')) === null) {
			return []
		} 
		return JSON.parse(localStorage.getItem('cart'))
	}

	_deleteCartItem = (itemId) => {
		const cartItems = this._getCartItems();
		cartItems.splice(itemId,1);
		localStorage.setItem('cart', JSON.stringify(cartItems));
		this.onStorageChange(JSON.parse(localStorage.getItem('cart')));
	}

	// _generateUserId = () => {
	// 	this.onStorageChange(this.cartItems);
	// }
	//! Нужно поменяь название массива на Add, потому что у нас должна быть функция сохранения элемента

	saveCartToLocalStorage = (item) => {
		const cartItems = this._getCartItems();
		const itemIndex = cartItems.findIndex(dataItem => item.id == dataItem.id);
		//Если элемента в корзине нет, то оставить все как есть, иначе добавить товар в корзину
		if(itemIndex == -1) {
			cartItems.push(item);
			this.onStorageChange(cartItems);
		} 
		localStorage.setItem('cart', JSON.stringify(cartItems));
	}
}

export default LocalStorage