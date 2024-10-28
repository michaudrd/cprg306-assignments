"use client"

import Item from "./item";
import { useState } from "react";

export default function ItemList({items}){

    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...items].sort((a,b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });


    return(
        <div>
            <div className="m-5">
                <label>Sort by:</label>
                <button onClick={() => setSortBy("name")} className={`p-1 m-2 w-28 ${sortBy === "name" ? "bg-blue-300":"bg-blue-400"}`}>Name</button>
                <button onClick={() => setSortBy("category")} className={`p-1 m-2 w-28 ${sortBy === "category" ? "bg-blue-300":"bg-blue-400"}`}>Category</button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}