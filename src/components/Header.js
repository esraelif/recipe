import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { faTwitter, faFacebok, faInst } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
    return (
        <div className='header container'>
            < Carousel data-bs-theme="dark"  >
                <Carousel.Item >
                    <img
                        className="d-block w-800 "

                        src="https://images.pexels.com/photos/7262911/pexels-photo-7262911.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-800"

                        src="https://images.pexels.com/photos/7262909/pexels-photo-7262909.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-800"

                        src="https://images.pexels.com/photos/6287581/pexels-photo-6287581.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel >
            <div className="who">
                <h1>What is TASTEMAP?</h1>
                <p> TASTEMAP is an app that helps you organize your recipes, make meal plans, and create grocery lists. Using Paprika's built-in browser, you can save recipes from anywhere on the web.

                    Want to access your recipes on your phone or tablet? Our cloud sync service allows you to seamlessly sync your data across all of your devices.
                </p>
            </div>

        </div >

    );
}

export default Header;
