import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecipeCard from './RecipeCard';

import { RecipeContext } from '../context/RecipeProvider';



const Recipes = () => {
    const { recipes, getData } = useContext(RecipeContext)
    console.log(recipes)

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
    }


    return (
        <div>
            <div className="previous-searches section">
                <h2> Search Your Favorite Meal</h2>
                <div className='previous-searches-container'>
                    <form className="search-box" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder='Search...'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} />
                        <button className='btn' type='submit'>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                    </form>
                    <div className='kapsayıcı'>
                        {/* Kartlar için RecipeCard bileşenini kullanıyoruz */}
                        {recipes.map((recipe, index) => (
                            <RecipeCard key={index} recipe={recipe} />

                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Recipes;
