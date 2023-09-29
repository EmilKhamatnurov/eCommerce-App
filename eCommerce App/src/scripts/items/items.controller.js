import ItemsModel from "./items.model";
import ItemsView from "./items.view";
import Firebase from "../firebase/firebase";

class ItemsController {
	constructor() {
		this.firebase = new Firebase();
		this.model = new ItemsModel();
		this.view = new ItemsView();
	}

	init() {
		this.firebase.readItems() 
			.then(itemsData => {
				this.model.saveItems(itemsData);
				this.view.renderItemsList(this.model.items);
			})
	}
}

export default ItemsController