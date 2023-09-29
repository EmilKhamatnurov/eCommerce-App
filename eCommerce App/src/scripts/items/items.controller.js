import ItemsModel from "./items.model";
import ItemsView from "./items.view";
import Firebase from "../firebase/firebase";
import LocalStorage from "./localStorage";

class ItemsController {
	constructor() {
		this.firebase = new Firebase();
		this.localStorage = new LocalStorage();
		this.model = new ItemsModel();
		this.view = new ItemsView();
	}

	init() {
		this.firebase.readItems() 
			.then(itemsData => {
				this.localStorage.saveToLocalStorage();
				this.model.saveItems(itemsData);
				this.view.renderItemsList(this.model.items);
			})
	}
}

export default ItemsController