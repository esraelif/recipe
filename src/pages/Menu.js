import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeProvider';
import MenuCard from './MenuCard';

const Menu = () => {
    const { recipes, getData } = useContext(RecipeContext);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const handleMealTypeClick = async (mealType) => {
        await getData(mealType); // API'den verileri çekmek için context'ten getData fonksiyonunu çağırın
    };

    return (
        <div className="menu">
            <button className='btn' onClick={() => handleMealTypeClick('breakfast')}>Breakfast</button>
            <button className='btn' onClick={() => handleMealTypeClick('lunch')}>Lunch</button>
            <button className='btn' onClick={() => handleMealTypeClick('teatime')}>Teatime</button>
            <button className='btn' onClick={() => handleMealTypeClick('dinner')}>Dinner</button>
            <div className="kapsa">
                {recipes.map(recipe => (
                    <MenuCard key={recipe.recipe.uri} recipe={recipe.recipe} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
