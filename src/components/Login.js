import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeContext } from "../context/RecipeProvider"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { name, setName, password, setPassword } = useContext(RecipeContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("username", name)
        localStorage.setItem("password", password)
        navigate("/home")

    }
    return (
        <div className='login'>
            <div className="signin">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;
