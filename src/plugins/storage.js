export default realStorage => ({
	authToken: new StorageItem(realStorage, 'ACCESS_TOKEN'),
	cartToken: new StorageItem(realStorage, 'CART_TOKEN')
});

class StorageItem{
	constructor(realStorage, keyName){
		this.realStorage = realStorage;
		this.keyName = keyName;
	}

	get(){
		return this.realStorage.getItem(this.keyName);
	}

	set(value){
		this.realStorage.setItem(this.keyName, value);
	}

	remove(){
		this.realStorage.removeItem(this.keyName);
	}
}
