import React from 'react';
import "../partials/_menu.scss";

const MenuCard = ({ recipe }) => {
    return (
        <div>
            <div className="recipe-card">
                <h3>{recipe.label}</h3>
                <img src={recipe.image} alt={recipe.label} />
            </div>
        </div>

    );
};

export default MenuCard;
