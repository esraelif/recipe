import React from 'react';

const Footer = () => {
    return (
        <div className='footer container'>
            <div className="footer-section">
                <p className='title'>Monthly Meal Planning</p>
                <p className=''>Save time and money using Paprika's meal planner.</p>
                <p className=''>Create meal plans for the week, or for the month.Design reusable menus from your favorite meals.</p>
            </div>
            <div className="footer-section">
                <p className='title'>Smart Grocery Lists</p>
                <p className=''>Paprika makes grocery shopping easy.

                    Ingredients in your grocery list are automatically sorted by aisle: Dairy, Produce, etc.</p>
                <p className=''>Similar ingredients will also be combined: 1 egg + 2 eggs = 3 eggs.

                    Make multiple grocery lists and organize and customize your grocery aisles</p>
            </div>
            <div className="footer-section">
                <p className='title'> Interactive Recipes</p>
                <p className=''>Track your progress by crossing off ingredients when you're done with them, and tap to highlight the current directions step</p>
                <p className=''>TasteMap keeps your screen on when you open a recipe, so you don't have to worry about the screen turning off while you're cooking.</p>
            </div>


        </div>
    );
}

export default Footer;
