"use client"
import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    let buttonStyles = "bg-blue-500 hover:bg-blue-700 rounded text-white w-8 active:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 m-1";

    return(
        <div className="flex justify-center w-full">
            <div className="p-2 m-4 bg-white text-white w-36">
                <div className="flex justify-between">
                    <p className="text-black mt-1">{quantity}</p>
                    <div className="flex">
                        <button onClick={decrement} className={buttonStyles} disabled={quantity === 1}>-</button>
                        <button onClick={increment} className={buttonStyles} disabled={quantity === 20}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}