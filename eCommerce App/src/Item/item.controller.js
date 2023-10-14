import ItemView from "./item.view";
import ItemModel from "./item.model";
import CartView from "./cart.view";
import Firebase from "../Firebase/firebase"
import LocalStorage from "../LocalStorage/localStorage";

class ItemController {
	constructor() {
		this.item_view = new ItemView();
		this.item_model = new ItemModel();
		this.cart_view = new CartView();
		this.firebase = new Firebase();
		this.localStorage = new LocalStorage({
			onStorageChange: this.f
		});
		// this.cart_view._renderCart(this.localStorage._getCartItems())
	}

	init = () => {
		// this.cart_view._renderCart(this.localStorage._getCartItems())
		const itemId = this.item_model.itemId;

		this.firebase.readItems()
		.then(itemsData => {
			this.item_model._saveItem(itemsData[itemId]);
			console.log(this.item_model.itemData);
		});
	}

}


const controller = new ItemController()
window.addEventListener('load', controller.init);