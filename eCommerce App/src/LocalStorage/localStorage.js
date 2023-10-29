class LocalStorage {
	constructor({onStorageChange}) {
		this.cartKeyString = 'cart';
		this.onStorageChange = onStorageChange;
		this.localStorage = localStorage;
	}
	_getCartItems = () => 
		this._getFromStorageByKey(this.cartKeyString) === null ? [] :
		this._getFromStorageByKey(this.cartKeyString)
	
	_getFromStorageByKey = (key) => JSON.parse(localStorage.getItem(key))

	_deleteCartItem = (itemId) => {
		const cartItems = this._getCartItems();
		cartItems.splice(itemId,1);
		localStorage.setItem('cart', JSON.stringify(cartItems));
		this.onStorageChange(this._getFromStorageByKey(this.cartKeyString));
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
		console.log(itemIndex,cartItems);
	}
}

export default LocalStorage