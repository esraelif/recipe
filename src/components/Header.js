import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { faTwitter, faFacebok, faInst } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
    return (
        <div className="header">
            <div className="who">
                <h1>What is TASTEMAP?</h1>
                <p> TASTEMAP is an app that helps you organize your recipes, make meal plans, and create grocery lists. Using Paprika's built-in browser, you can save recipes from anywhere on the web.

                    Want to access your recipes on your phone or tablet? Our cloud sync service allows you to seamlessly sync your data across all of your devices.
                </p>
            </div>
            <div className="header-img-container">
                <img className="d-block w-800 " src="https://images.pexels.com/photos/7262911/pexels-photo-7262911.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="First slide" />
                <img className="d-block w-800"
                    src="https://images.pexels.com/photos/7262909/pexels-photo-7262909.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Second slide" />

                <img className="d-block w-800" src="https://images.pexels.com/photos/6287581/pexels-photo-6287581.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/3872435/pexels-photo-3872435.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/4198930/pexels-photo-4198930.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/6287261/pexels-photo-6287261.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/8851929/pexels-photo-8851929.jpeg?cs=srgb&dl=pexels-yaroslav-shuraev-8851929.jpg&fm=jpg&_gl=1*1by046j*_ga*OTMwNDgzMzUyLjE3MDA3NDg4ODM.*_ga_8JE65Q40S6*MTcxMTI3MTU3MC4yNy4xLjE3MTEyNzI3NzkuMC4wLjA."
                    alt="Third slide" />
                <img className="d-block w-800" src="https://images.pexels.com/photos/5946966/pexels-photo-5946966.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />

                <img className="d-block w-800" src="https://images.pexels.com/photos/7245458/pexels-photo-7245458.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide" />



            </div>
        </div>
    )
}









export default Header;
