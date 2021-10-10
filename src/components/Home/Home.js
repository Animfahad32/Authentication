import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2>Home</h2>
            {user.email && <h3>Hello {user.displayName}</h3>}
        </div>
    );
};

export default Home;