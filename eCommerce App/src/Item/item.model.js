class ItemModel {
	constructor() {
		this.itemId = this.getMovieID();
		this.itemData;
	}

	_saveItem = (itemData) => {
		this.itemData = {
			name: itemData.name,
			model: itemData.model,
			price: itemData.price,
			image: itemData.image,
			basic_information: itemData.basic_information, 
			full_description: itemData.full_description
		};
	  };

	// Получаем id товара
	getMovieID = () => {
		// Получаем текущий URL
		const url = new URL(window.location.href);
		// Получаем объект URLSearchParams, содержащий все GET-параметры
		const searchParams = new URLSearchParams(url.search);
		// Получаем все параметры в виде объекта
		const itemId = {};
		for (const [key, value] of searchParams.entries()) {
			itemId[key] = value;
		}
		return itemId.id;
	};
}
export default ItemModel