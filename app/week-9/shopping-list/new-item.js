"use client"
import { useState } from "react";

export default function NewItem({onAddItem}){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    };

    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const generateRandString = (length = 18) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        let generatedString = "";
        for (let i = 0; i < length; i++) {
            generatedString += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return generatedString;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            id: generateRandString(18),
            name,
            quantity, 
            category
        };
        
        console.log(item);

        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");

    }

    let buttonStyles = "bg-blue-500 hover:bg-blue-700 rounded text-white w-8 active:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 m-1";

    return(
        <div>
            <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="text" placeholder="Item Name" value={name} className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg" onChange={handleNameChange} required></input>
                </div>
                <div className="flex justify-between">
                    <div className="p-2 mt-1 mb1 rounded-md bg-white text-white w-36">
                        <div className="flex justify-between">
                            <p className="text-black">{quantity}</p>
                            <div className="flex">
                                <button type="button" onClick={decrement} className={buttonStyles} disabled={quantity === 1}>-</button>
                                <button type="button" onClick={increment} className={buttonStyles} disabled={quantity === 20}>+</button>
                            </div>
                        </div>
                    </div>
                    <select value={category} className="ml-1 border-2 border=gray-300 p-2 rounded-lg" onChange={handleCategoryChange}>
                        <option value disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>                            <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">+</button>
            </form>
        </div>
    );
}