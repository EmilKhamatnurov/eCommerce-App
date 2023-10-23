class CartView {
	constructor() {
		this.cartOutputNode = document.querySelector('#cartOutput');
		this.cartNode = document.querySelector('#cart');
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
			<div data-cartItem = '${index}' class='cart-item'>
				<img class='cart__item-image' src="${cartItem.image}" alt="Картинка товара">
			</div>
		`
	}

	// Рендер списка элементов в корзине
	_renderCartList = (itemsData) => {
		this.cartOutputNode.innerHTML = '';
		if (!itemsData) {
			this.cartOutputNode.innerHTML = `<p>Корзина пуста</p>`
			return
		}
		itemsData.forEach((item, index) => {
			this.cartOutputNode.innerHTML += this._buildCartListItemHtml(item, index);
		});
	}
	
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
}
export default CartView;