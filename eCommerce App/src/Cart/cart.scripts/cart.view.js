class CartView {
	constructor({onCounterBtnClick}) {
		this.onCounterBtnClick = onCounterBtnClick;
		// Корзина в углу
		this.cartNode = document.querySelector('#cart');
		// Список товаров
		this.cartOutputNode = document.querySelector('#cartOutput');
		// Добаввление обработчика событий для кнопок добавления количества товара
		this.cartOutputNode.addEventListener('click', (element) => {
			this._addListenerToCounterBtn(element.target);
		})
		// Кнопка возврата к главной странице магазина
		this.backButtonNode = document.querySelector('#backButton');
		this.backButtonNode.addEventListener('click', this._openMainPage);
		// Общая стоимость корзины
		this.totalCostOutputNode = document.querySelector('#totalCostOutput');
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
						<div class="cart-list__item-price">$  ${cartItem.price} x  <span class="cart-list__item-count">${cartItem.count}</span></div>
						<div class="cart-list__item-counter">
							<button data-operation="-" class="cart-list__item-counter-button">-</button>
							<div class="cart-list__item-count">${cartItem.count}</div>
							<button data-operation="+" class="cart-list__item-counter-button">+</button>
						</div>
					</div>
				</div>
			</div>
		`
	}

	_addListenerToCounterBtn = (element) => {
		const btnOperation = element.dataset["operation"];
		if (btnOperation) {
			const itemNode = element.closest('.cart-list__item');
			const itemId = itemNode.dataset['cartitem'];
			this.onCounterBtnClick(btnOperation,itemId);
		}
	}

	renderItemCount = (itemId, count) => {
		const item = document.querySelector(`.cart-list__item[data-cartitem="${itemId}"]`)
		for (const counter of item.querySelectorAll('.cart-list__item-count')) {
			counter.innerHTML = count;
		}
	}
	renderTotalCost = (totalCost) => {
		this.totalCostOutputNode.innerHTML = totalCost;
	}

	// переопределиться
	_openMainPage = () => window.location.href = `../../index.html`;
}
export default CartView;