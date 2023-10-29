class ItemsView {
	constructor({onItemClick}) {
		this.onItemClick = onItemClick;

		this.itemsListNode = document.querySelector('#items');
		this.cartNode = document.querySelector('#cart');

		this.itemsListNode.addEventListener('click' ,(element) => {
			this.handleItemClick(element.target);
		});
	}

	// Рендер списка товаров
	renderItemsList = (itemsList) => {
		itemsList.forEach((item, index) => {
			// Рендер списка товаров
			this.itemsListNode.innerHTML += this._buildItemHtml(item, index);
		});
	}

	// Формирует HTML разметку товара
	_buildItemHtml = (item, index) => {
		return `
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
	}
	handleItemClick = (element) => {
		// Добавление в корзину товара
		const itemId = this._returnItemId(element);
		if (element.getAttribute('class') === 'item_cart-image') {
			this.onItemClick(itemId);
		}
		// Открытие страницы информации
		else {
			this._openInformationPage(itemId);
		}
	}
	
	_openInformationPage = (itemId) => window.location.href = `./src/Item/Item.html?id=${itemId}`;

	_returnItemId = (element) => {
		return element.closest('.item').getAttribute('data-item');
	}
}
export default ItemsView;