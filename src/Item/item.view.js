class ItemView {
	constructor({onAddCartButtonClick}) {
		this.onAddCartButtonClick = onAddCartButtonClick;
		this.itemInfoOutputNode = document.querySelector('#itemInfoOutput');
		this.backButtonNode = document.querySelector('#backButton');
		this.backButtonNode.addEventListener('click', this._openMainPage)
		// this.addToCartBtnNode = document.querySelector('#addToCartBtn')
		// this.this.addToCartBtnNode.addEventListener('click', this.onAddCartButtonClick)
	}

	_renderItemInfo = (itemInfo) => {
		this.itemInfoOutputNode.innerHTML = this._buildItemInfoHtml(itemInfo);
	}

	_buildItemInfoHtml = (itemInfo) => {
		return `
			<div class="basic-information">
				<img class='item-image' src='${itemInfo.image}' alt="Картинка товара">
				<div class="basic-information-wrapper">
					<h1 class="item-name" id="itemName">${itemInfo.name}</h1>
					<p class="item-model" id="itemModel">${itemInfo.model}</p>
					<div class="item-rating" id="itemRating"></div>
					<p class="item-price" id="itemPrice">${itemInfo.price}</p>
					<p class="item-basic-information" id="itemBasicDesc">${itemInfo.basic_information}</p>
					${this._createAddCartBtn()}
				</div>
			</div>
			<div class="divider"></div>
			<h2 class="full-desc-title">Описание товара</h2>
			<div id="fullDesc" class="full-desc-wrapper">
				${itemInfo.full_description}
			</div>
		`
	}
	_createAddCartBtn = () => {
		// Кнопка
		const btn = document.createElement('button');
		const elementWrapper = document.createElement('div');
		btn.classList.add('cart_button', 'add-to-cart-btn')
		btn.id = "addToCartBtn";
		//Тест кнопки
		const btnText = document.createElement('div')
		btnText.innerText = "В корзину";
		
		// Картинка добавления товара
		const image = document.createElement('img');
		image.src = '../assets/add-btn-icon .svg';
		
		// Создание элемента кнопки
		btn.setAttribute("onclick", 'this.item_view.handleAddCartBtnClick');
		btn.appendChild(image);
		btn.appendChild(btnText);
		elementWrapper.appendChild(btn);
		return elementWrapper.innerHTML;
	}

	_openMainPage = () => window.location.href = `../../index.html`;
}

export default ItemView;