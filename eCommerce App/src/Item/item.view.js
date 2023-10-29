class ItemView {
	constructor({onAddCartButtonClick}) {
		this.onAddCartButtonClick = onAddCartButtonClick;
		this.itemInfoOutputNode = document.querySelector('#itemInfoOutput');
		this.backButtonNode = document.querySelector('#backButton');
		this.backButtonNode.addEventListener('click', this._openMainPage)
	}

	_renderItemInfo = (itemInfo) => {
		this.itemInfoOutputNode.innerHTML = this._buildItemInfoHtml(itemInfo);
		// Чтобы повесить слушатель на кнопку есть вариант слепить ее с помощью createElement или 
		// Найти ее после рендера в разметке
		this.addToCartBtnNode = document.querySelector('#addToCartBtn')
		this.addToCartBtnNode.addEventListener('click', this.onAddCartButtonClick)
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
					<button id="addToCartBtn" class="cart_button add-to-cart-btn">
						<img src="../assets/add-btn-icon .svg">
						В корзину
					</button>
				</div>
			</div>
			<div class="divider"></div>
			<h2 class="full-desc-title">Описание товара</h2>
			<div id="fullDesc" class="full-desc-wrapper">
				${itemInfo.full_description}
			</div>
		`
	}

	_openMainPage = () => window.location.href = `../../index.html`;
	
}

export default ItemView;