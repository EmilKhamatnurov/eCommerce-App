class CartView {
    constructor() {
		this.cartNode = document.querySelector('#cart');
    }

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

}

export default CartView