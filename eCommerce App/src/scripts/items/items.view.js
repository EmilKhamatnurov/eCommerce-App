class ItemsView {
	constructor() {
		this.itemsListNode = document.querySelector('#items');
	}

	renderItemsList(itemsList) {
		itemsList.forEach(item => {
			this.itemsListNode.innerHTML += `
				<a class = 'item' scr="#">
					<img class='item__image' src="${item.image}" alt="Картинка товара">
					<div>
						<p class='item__name'>${item.name}</p>
						<p class='item__model'>${item.model}</p>
					</div>
					<div class='price-and-cartBtn'>
						<p class='item__price'>$ ${item.price}</p>
						<img class="item_cart-image" src="./src/assets/Card Button.svg">
					</div>
				</a>
			`
		});
	}
}

export default ItemsView;