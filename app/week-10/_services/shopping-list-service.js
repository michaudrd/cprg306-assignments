import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId, itemListStateSetter) {
    try {
        const itemsReference = collection(db, "users", userId, "items");
        const itemsQuery = query(itemsReference);
        const querySnapshot = await getDocs(itemsQuery);
        
        let itemsList = [];
        querySnapshot.forEach((doc) => {
            let item = {
                id: doc.id,
                ...doc.data()
            };
            itemsList.push(item);
            itemListStateSetter(itemsList);
        });
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, item) {
    try {
        const itemsReference = collection(db, "users", userId, "items");
        const newItem = await addDoc(itemsReference, item);
        console.log(newItem.id);
        return newItem.id;
    } catch (error) {
        console.log(error);
    }
}