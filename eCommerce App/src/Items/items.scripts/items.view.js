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
	renderItemsList(itemsList) {
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

	handleItemClick(element) {
		const itemId = this._returnItemId(element);
		if (element.getAttribute('class') === 'item_cart-image') {
			this.onItemClick(itemId);
		}
		else {
			// this._openInformationPage(itemId);
			console.log(itemId);
		}
	}
	
	_openInformationPage = (itemId) => window.location.href = `./src/pages/itemInfoPage.html?id=${itemId}`;

	_returnItemId (element) {
		return element.closest('.item').getAttribute('data-item');
	}
}
// Функция открытия страницы информации
	// openInformationPage (element) {
	// 	const itemId = this._returnItemId(element); // id получает и пока никуда не отправляет
	// }
	// Фуцнкция F отправляет id в model  Model - рендерит
	
export default ItemsView;