class ItemsView {
	constructor() {
		this.itemsListNode = document.querySelector('#items');
	}

	renderItemsList(itemsList) {
		let itemsLayoyt = '';
		itemsList.forEach(item => {
			itemsLayoyt += `
				<div class = 'item'>
					<img class='item__image' src="${item.image}" alt="Картинка товара">
					<p class='item__name'>Название товара: ${item.name}</p>
					<p class='item__model'>Модель товара: ${item.model}</p>
					<p class='item__price'>Цена товара: ${item.price}</p>
				</div>
			`
		});
		this.itemsListNode.innerHTML = itemsLayoyt;
	}
}

export default ItemsView;