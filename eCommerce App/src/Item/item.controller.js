import ItemView from "./item.view";
import ItemModel from "./item.model";
import CartView from "./cart.view";
import Firebase from "../Firebase/firebase"
import LocalStorage from "../LocalStorage/localStorage";

class ItemController {
	constructor() {
		this.item_view = new ItemView({
			onAddCartButtonClick: this.handleAddCartBtnClick, 
		});
		this.item_model = new ItemModel();
		this.cart_view = new CartView();
		this.firebase = new Firebase();
		this.localStorage = new LocalStorage({
			onStorageChange: this.f
		});
	}

	init = () => {
		const itemId = this.item_model.itemId;
		this.cart_view._renderCart(this.localStorage._getCartItems());
		
		this.firebase.readItems()
			.then(itemsData => { 
				this.item_model._saveItem(itemsData[itemId]);
				// Рендер данных
				this.item_view._renderItemInfo(this.item_model.itemData);
			});
	}

	handleAddCartBtnClick = () => {
		this.localStorage.saveCartToLocalStorage(this.item_model._getItem())
	}
	// Функция-заглушка
	f = () => {

	}
}


const controller = new ItemController()
window.addEventListener('load', controller.init);