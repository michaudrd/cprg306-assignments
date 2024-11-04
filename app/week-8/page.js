"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 
import {useState} from "react";
import MealIdeas from "./meal-ideas";

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems( [...items, newItem] );
    };

    const handleItemSelect = (item) => {
        const newName = item.replace(/[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FAFF}|\u{2600}-\u{26FF}]/gu, '').replace(/,.*$/, '').trim();
        setSelectedItemName(newName);
    };

    return(
        <main className="bg-indigo-950">
            <h1 className="text-4xl font-bold mb-5 ml-2">Shopping List</h1>
            <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="ml-5 mt-3">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}