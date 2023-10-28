class ItemsModel {
	constructor() {
		this.items = [];
	}
	_getItem = (itemId) => {
		return this.items[itemId];
	}
	saveItems(itemsData) {
      itemsData.forEach(item => {
         this.items.push({
			id: item.id,
            name: item.name,
            model: item.model,
            price: item.price,
            image: item.image,
			count: 1,
			cost: item.price,
			basic_information: item.basic_information, 
			full_description: item.full_description
         });
      });
	};
}
export default ItemsModel;