class LocalStorage {
	constructor({onStorageChange}) {
		this.cartKeyString = 'cart';
		this.onStorageChange = onStorageChange;
	}
	_getCartItems = () => 
		this._getFromStorageByKey(this.cartKeyString) === null ? [] :
		this._getFromStorageByKey(this.cartKeyString)
	
	_getFromStorageByKey = (key) => JSON.parse(localStorage.getItem(key))
	_saveItemsToLocal = (key, items) => localStorage.setItem(key, JSON.stringify(items));
	_getTotalCost = () => {
		let totalCost = 0;
		
		this._getCartItems().forEach(item => {
			totalCost = totalCost + Number(item.cost);
		});

		return totalCost.toFixed(2);
	}

	_deleteCartItem = (itemId) => {
		const cartItems = this._getCartItems();
		cartItems.splice(itemId,1);
		this._saveItemsToLocal('cart',cartItems)
		this.onStorageChange(this._getFromStorageByKey(this.cartKeyString));
	}

	changeItemCount = (operation, itemId) => {
		const cartItems = this._getCartItems();
		if (operation === "+") {
			cartItems[itemId].count += 1;
		} 
		else if (cartItems[itemId].count > 1) {
			cartItems[itemId].count -= 1;
		}
		cartItems[itemId].cost = cartItems[itemId].price * cartItems[itemId].count;
		// загружаем изменения в базу
		this._saveItemsToLocal('cart', cartItems)
		// Рендерим элементы корзины
		this.onStorageChange(itemId, cartItems[itemId].count);
	}

	saveCartToLocalStorage = (item) => {
		/* Почему-то переменная считывает старую версию LocalStorage. 
		Возможно дело в порядке процессов */
		const cartItems = this._getCartItems();
		const itemIndex = cartItems.findIndex(dataItem => item.id == dataItem.id);
		//Если элемента в корзине нет, то оставить все как есть, иначе добавить товар в корзину
		if(itemIndex == -1) {
			cartItems.push(item);
			this.onStorageChange(cartItems);
		} 
		this._saveItemsToLocal('cart',cartItems);
	}
}

export default LocalStorage