class LocalStorage {
	constructor({onStorageChange}) {
		this.cartKeyString = 'cart';
		this.onStorageChange = onStorageChange;
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

	saveCartToLocalStorage = (item) => {
		/*Почему-то переменная считывает старую версию LocalStorage. Возможно дело в порядке процессов */
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