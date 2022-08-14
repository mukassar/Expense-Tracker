import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <label htmlFor="">UserName</label>
            <input type="text" placeholder='Username' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password'  />
            <button>Submit</button>
        </div>
    );
};

export default LoginForm ;