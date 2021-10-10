import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Log-in</h2>
            <button onClick={signInUsingGoogle}>Google Sign-in</button>
            <br />
            <Link to='/register'>New to sign-up?</Link>
        </div>
    );
};

export default Login;