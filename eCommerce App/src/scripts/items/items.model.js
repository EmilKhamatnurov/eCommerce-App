class ItemsModule {
	constructor() {
		this.items = [];
	}
	
	saveItems(itemsData) {
		itemsData.then(items => {
			items.forEach(item => {
				this.items.push({
					name: item.name,
					model: item.model,
					price: item.price,
					image: item.image,
				});
			});
		});
	};
}
export default ItemsModule;