class ItemView {
	constructor() {
		this.itemInfoOutputNode = document.querySelector('#itemInfoOutput');
		this.backButtonNode = document.querySelector('#backButton');
		this.backButtonNode.addEventListener('click', this._openMainPage)
	}

	_renderItemInfo = (itemInfo) => {
		this.itemInfoOutputNode.innerHTML = this._buildItemInfoHtml(itemInfo);
	}

	_buildItemInfoHtml = (itemInfo) => {
		return `
			<div class="basic-information">
				<img class='item-image' src='${itemInfo.image}' alt="Картинка товара">
				<div class="basic-information-wrapper">
					<h1 id="itemName">${itemInfo.name}</h1>
					<p id="itemModel">${itemInfo.model}</p>
					<div id="itemRating"></div>
					<p id="itemPrice">${itemInfo.price}</p>
					<p id="itemBasicDesc"></p>
					<!-- <button></button> -->
				</div>
			</div>
			<div id="fullDesc" class="full-Desc-wrapper">
				
			</div>
		`
	}

	_openMainPage = () => window.location.href = `../../index.html`;
}

export default ItemView;