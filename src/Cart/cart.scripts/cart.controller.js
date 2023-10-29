import CartView2 from "./cart.view";
import Firebase from "../../Firebase/firebase";
import LocalStorage from "../../LocalStorage/localStorage";

class CartController {
	constructor() {
		this.cart_view = new CartView2();
		this.localStorage = new LocalStorage({
			onStorageChange: this.f
		});
		this.firebase = new Firebase();
	}

	init = () => {
		const cartData = this.localStorage._getCartItems();
		this.cart_view._renderCart(cartData);
		this.cart_view._renderCartList(cartData);
		// this.firebase.readItems()
		// 	.then(itemsData => { 
		// 		// Рендер данных корзины
				
		// 	});
	}
	// функция-заглушка
	f = () => {

	}
}


const controller = new CartController()
window.addEventListener('load', controller.init);