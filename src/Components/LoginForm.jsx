import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <label>Username:</label>
            <input placeholder='User Name'/>
            <label>Password</label>
            <input placeholder='Type Your Password' type={'password'}/>
            <button className=" btn btn primary">Submit</button>
        </div>
    );
};

export default LoginForm;