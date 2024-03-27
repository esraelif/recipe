import React, { useState } from 'react';

const RecipeCard = ({ recipe, isAlone }) => {
    const [showRecipe, setShowRecipe] = useState(false);

    const toggleRecipe = () => {
        setShowRecipe(!showRecipe);
    };

    return (
        <div className={`search-item ${showRecipe ? 'expanded' : ''} ${isAlone ? 'alone' : ''}`}>
            <div onClick={toggleRecipe}>
                <h3>{recipe.recipe.label}</h3>
                <img src={recipe.recipe.image} alt="" />
            </div>
            {showRecipe && (
                <div className='ingredients'>
                    {recipe.recipe.ingredients.map((ingredient, index) => (
                        <p key={index}>{ingredient.text}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipeCard;
