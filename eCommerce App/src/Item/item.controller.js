import ItemView from "./item.view";
import CartView from "./cart.view";
import Firebase from "../Firebase/firebase"
import LocalStorage from "../LocalStorage/localStorage";

class ItemController {
	constructor() {
		this.item_view = new ItemView();
		this.cart_view = new CartView();
		this.firebase = new Firebase();
		this.localStorage = new LocalStorage({
			onStorageChange: this.f
		});
		// this.cart_view._renderCart(this.localStorage._getCartItems())
	}
	init = () => {
		this.cart_view._renderCart(this.localStorage._getCartItems());
	}

	f = () => {

	}
}


const controller = new ItemController()
window.addEventListener('load', controller.init);