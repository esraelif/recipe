import React from 'react';
import { Link } from 'react-router-dom'; // React Router'dan Link bileşenini import edin

const Register = () => {
    return (
        <div className='register'>
            <div className="signup">
                <p>To discover <br /> all recipe <br /> for <span style={{ fontSize: "46px" }}> Free</span></p>
                <button><Link to="/signup">SIGN UP</Link></button>
                <p style={{ fontSize: "26px" }}>OR</p>
                <button><Link to="/login">LOGIN</Link></button>
            </div>
        </div>
    );
}

export default Register;
