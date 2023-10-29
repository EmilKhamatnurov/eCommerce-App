// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

class Firebase {
	constructor() {
		this.firebaseConfig = {
			apiKey: "AIzaSyD1TXMCLT5HDV0Pnqm5mHUGedKYrC7LtnU",
			authDomain: "ecommerce-app-fda83.firebaseapp.com",
			projectId: "ecommerce-app-fda83",
			storageBucket: "ecommerce-app-fda83.appspot.com",
			messagingSenderId: "692279988091",
			appId: "1:692279988091:web:d3808cc4a99a924376f7de"
		  };
		// Initialize Firebase
		this.app = initializeApp(this.firebaseConfig);
		// Initialize Cloud Firestore and get a reference to the service
		this.db = getFirestore(this.app);
	}

	async readItems() {
		const itemsData = [];
		const querySnapshot = await getDocs(collection(this.db, "Items"));
		querySnapshot.forEach((doc) => {
			let dataObject = doc.data();
			dataObject.id = doc.id;
			itemsData.push(dataObject)
		})
		return itemsData;
	}
	async getItemById() {
		const querySnapshot = await getDocs(collection(this.db, "Items"));
	}
}
export default Firebase







 