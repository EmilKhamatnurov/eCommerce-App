class ItemsModel {
	constructor() {
		this.items = [];
	}
	
	saveItems(itemsData) {
      itemsData.forEach(item => {
         this.items.push({
            name: item.name,
            model: item.model,
            price: item.price,
            image: item.image,
         });
      });
	};
}
export default ItemsModel;