import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Sign-up</h2>
            <form>
                <input type="email" placeholder="E-mail" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <Link to="login">Already a member?</Link>
        </div>
    );
};

export default Register;