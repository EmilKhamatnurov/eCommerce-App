import ItemsModule from "./items.model";
import ItemsView from "./items.view";
import Firebase from "../firebase/firebase";

class ItemsController {
	constructor() {
		this.firebase = new Firebase();
		this.modele = new ItemsModule();
		this.view = new ItemsView();
	}

	init() {
		const itemsData = this.firebase.readItems();
		this.modele.saveItems(itemsData);
		this.view.renderItemsList(this.modele.items);
	}
}
export default ItemsController