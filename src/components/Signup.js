import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    // Burada kullanıcı kayıt işlemleri gerçekleştirilebilir

    return (
        <div className='signup'>
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="form-group">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
}

export default Signup;
