class ItemsView {
	constructor() {
		this.itemsListNode = document.querySelector('#items');
		this.itemsListNode.addEventListener('click' ,(element) => {
			this.openInformationPage(element);
		});
	}

	// Рендер списка товаров
	renderItemsList(itemsList) {
		itemsList.forEach((item, index) => {
			this.itemsListNode.innerHTML += `
				<a data-item='${index}' class = 'item' scr="#">
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

	// Функция открытия страницы информации
	openInformationPage (e) {
		console.log(e.target);
	}
}

export default ItemsView;