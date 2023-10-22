import ItemsModel from "./items.model";
import ItemsView from "./items.view";
import CartView from "./cart.view";
import CartModel from "./cart.model";
import Firebase from "../../Firebase/firebase"
import LocalStorage from "../../LocalStorage/localStorage";

class ItemsController {
	constructor() {
		// Items obj
		this.item_model = new ItemsModel();
		this.item_view = new ItemsView({
			onItemClick: this.handleItemClick
		});
		//  Cart obj
		this.cart_model = new CartModel();
		this.cart_view = new CartView({
			onDeleteBtnClick: this.handleDeleteBtnClick
		});
		// local Storage
		this.localStorage = new LocalStorage({
			onStorageChange: this.onCartChange
		});
		// firebase
		this.firebase = new Firebase();
	}

	init() {
		this.firebase.readItems() 
			.then(itemsData => {
				this.item_model.saveItems(itemsData);
				this.item_view.renderItemsList(this.item_model.items);
				this.cart_view._renderCart(this.localStorage._getCartItems());
			})
	}
	handleDeleteBtnClick = (itemId) => {
		this.localStorage._deleteCartItem(itemId);
	}

	handleItemClick = (itemId) => {
		const item = this.item_model._getItem(itemId);
		this.localStorage.saveCartToLocalStorage(item);
	}
	onCartChange = (cartItems) => {
		this.cart_view._renderCart(cartItems);
	}
}

export default ItemsController