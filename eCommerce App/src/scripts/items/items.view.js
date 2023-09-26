class ItemsView {
	constructor() {
		this.itemsListNode = document.querySelector('#items');
	}

	renderItemsList(items) {
		innerHTML = '';
		items.forEach(item => {
			innerHTML += `
				<div>
					${item.name}
				</div>
			`
		});
		this.itemsListNode.innerHTML = innerHTML;
	}
}

export default ItemsView;