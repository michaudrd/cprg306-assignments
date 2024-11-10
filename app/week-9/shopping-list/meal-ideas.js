"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient){
    try {
        const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        if (!response.ok){
            console.log(response.status);
        }
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.log(`Error: ${error.message}`)
        return [];
    }
}

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealsFetched = await fetchMealIdeas(ingredient);
        setMeals(mealsFetched);
    }

    useEffect( () => {
        if (ingredient){
            loadMealIdeas();
        }
    }, [ingredient]);

    return(
        <div className="flex-1 max-w-sm m-2">
            <div>
                <h2 className="text-xl font-bold">Meal Ideas</h2>
                <div>
                    <p>{ingredient === "" ? "Select an item to see meal ideas." : meals.length > 0 ? `Here are some meal ideas for ${ingredient}: ` : `No meal ideas found for ${ingredient}.`}</p>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal} className="p-2 m-1 bg-indigo-900 max-w-sm hover:bg-blue-400">
                                <p>{meal.strMeal}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}