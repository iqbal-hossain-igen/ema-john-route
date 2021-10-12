import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="form-login">
            <div >
                <h2>Login</h2>
                <form action="">
                    <input type="email" name=""  placeholder="Your Email" />
                    <br />
                    <input type="password" name="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>---------------or----------------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;