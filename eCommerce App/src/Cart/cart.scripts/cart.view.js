class CartView {
	constructor() {
		this.cartOutputNode = document.querySelector('#cartOutput');
		this.cartNode = document.querySelector('#cart');
		// Кнопка возврата к главной странице магазина
		this.backButtonNode = document.querySelector('#backButton');
		this.backButtonNode.addEventListener('click', this._openMainPage);
	}
	// Рендер корзины сбоку
	_renderCart = (cartItems) => {
		this.cartNode.innerHTML = '';
		if(cartItems) {
			cartItems.forEach((cartItem, index) => {
				this.cartNode.innerHTML += this._buildCartItemHtml(cartItem, index);
			});
		}
		else {
			this.cartNode.innerHTML = 'Пустая';
		}	
	}
	_buildCartItemHtml = (cartItem, index) => {
		return `
			<div data-cartItem='${index}' class='cart-item'>
				<button class="delete-item-btn">
					<img data-deleteBtn="${index}" class="delete-item-btn-image" src="../assets/Close-btn-image.png">
				</button>
				<img class='cart__item-image' src="${cartItem.image}" alt="Картинка товара">
			</div>
		`
	}

	// Рендер списка элементов в корзине
	_renderCartList = (itemsData) => {
		this.cartOutputNode.innerHTML = '';
		if (itemsData.lenght === 0) {
			this.cartOutputNode.innerHTML = `<p>Корзина пуста</p>`
			return
		}
		itemsData.forEach((item, index) => {
			this.cartOutputNode.innerHTML += this._buildCartListItemHtml(item, index);
		});

	}
	// добавиться
	_buildCartListItemHtml = (cartItem, index) => {
		return `
			<div data-cartItem = "${index}" class="cart-list__item">
				<img src="${cartItem.image}" class="cart-list__item-image">
				<div class="cart-list__item-info">
					<p class="cart-list__item-name">${cartItem.name}</p>
					<p class="cart-list__item-model">${cartItem.model}</p>
					<p class="cart-list__item-basic-info">${cartItem.basic_information}</p>
					<div class="cart-list__item-rating"></div>
					<div class="cart-list__price-wrapper">
						<div class="cart-list__item-price">${cartItem.price}</div>
						<div class="cart-list__item-counter"></div>
					</div>
					
				</div>
			</div>
		`
	}
	// переопределиться
	_openMainPage = () => window.location.href = `../../index.html`;
}
export default CartView;