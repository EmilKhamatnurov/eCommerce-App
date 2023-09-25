import ItemsModule from "./items.model";
import ItemsView from "./items.view";
import Firebase from "../firebase/firebase";

class ItemsController {
	constructor() {
		this.firebase = new Firebase();
		this.module = new ItemsModule();
		this.view = new ItemsView();
	}

	init() {
		this.firebase.readItems();
	}
}
export default ItemsController