import CartView from "./cart.view";
import Firebase from "../../Firebase/firebase";
import LocalStorage from "../../LocalStorage/localStorage";

class CartController {
	constructor() {
		this.cart_view = new CartView({
			onCounterBtnClick: this.handleCounterBtnClick,
		});
		this.localStorage = new LocalStorage({
			onStorageChange: this.itemCountChanged
		});
		this.firebase = new Firebase();
	}

	init = () => {
		const cartData = this.localStorage._getCartItems();
		this.cart_view._renderCart(cartData);
		this.cart_view._renderCartList(cartData);
	}

	handleCounterBtnClick = (operation, itemId) => {
		this.localStorage.changeItemCount(operation,itemId);
	}
	// функция-заглушка
	itemCountChanged = (itemId, itemCount) => {
		
		this.cart_view.renderItemCount(itemId,itemCount);
		this.cart_view.renderTotalCost(this.localStorage._getTotalCost());
	}
}


const controller = new CartController()
window.addEventListener('load', controller.init);