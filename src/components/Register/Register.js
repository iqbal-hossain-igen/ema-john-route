import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form-login">
            <div>
                <h2>Register</h2>
                <form action="">
                    <input type="email" name="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" placeholder="password"/><br />
                    <input type="password" name="repassword"  placeholder="re-type password"/>
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already Registered <Link to="/login">Login</Link></p>
                <div>---------------or----------------</div>
                <button  className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Register;