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
			count: 0,
			cost: 0,
			basic_information: item.basic_information, 
			full_description: item.full_description
         });
      });
	};
}
export default ItemsModel;