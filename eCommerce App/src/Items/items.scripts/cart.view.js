class CartView {
    constructor({onDeleteBtnClick}) {
		this.onDeleteBtnClick = onDeleteBtnClick;
		this.cartNode = document.querySelector('#cart');
		this.cartNode.addEventListener('click', (element) => {
			this._deleteItemFromCart(element);
		});
		this.cartBtnNode = document.querySelector('#cartBtn');
		this.cartBtnNode.addEventListener('click', this._openCartPage);
    }

	_deleteItemFromCart = (element) => {
		const btnId = element.target.dataset['deletebtn'];
		if(btnId) {
			this.onDeleteBtnClick(btnId);
		}
	}

	_renderCart = (cartItems) => {
		this.cartNode.innerHTML = '';
		if(cartItems) {
			cartItems.forEach((cartItem, index) => {
				this.cartNode.innerHTML += this._buildCartItemHtml(cartItem, index);
			})
		}
		else {
			this.cartNode.innerHTML = 'Пустая';
		}	
	}

	_buildCartItemHtml = (cartItem, index) => {
		return `
			<div data-cartItem='${index}' class='cart-item'>
				<button class="delete-item-btn">
					<img data-deleteBtn="${index}" class="delete-item-btn-image" src="./src/assets/Close-btn-image.png">
				</button>
				<img class='cart__item-image' src="${cartItem.image}" alt="Картинка товара">
			</div>
		`
	}

	_openCartPage = () => window.location.href = `./src/Cart/Cart.html`;
}

export default CartView