import ItemsModel from "./items.model";
import ItemsView from "./items.view";
import Firebase from "../../Firebase/firebase"
import LocalStorage from "../../LocalStorage/localStorage";

class ItemsController {
	constructor() {
		this.model = new ItemsModel();
		this.view = new ItemsView({
			onCartBtnClick: this.handleCartBtnClick
		});

		this.localStorage = new LocalStorage({
			onStorageChange: this.localStorageChange
		});
		this.firebase = new Firebase();
	}

	init() {
		this.firebase.readItems() 
			.then(itemsData => {
				this.model.saveItems(itemsData);
				this.view.renderItemsList(this.model.items);
				this.view._renderCart(this.localStorage._getCartItems())
			})
	}

	handleCartBtnClick = (itemId) => {
		const item = this.model._getItem(itemId);
		this.localStorage.saveCartToLocalStorage(item);
	}
	localStorageChange = (cartItems) => {
		this.view._renderCart(cartItems);
	}
}

export default ItemsController