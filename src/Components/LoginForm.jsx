import React from 'react';

const LoginForm = () => {
    return (
        <div>

            <label>Username:</label>
            <input placeholder='User Name'/>
            <label>Password</label>
            <input placeholder='Type Your Password' type={'password'}/>
            <button className=" btn btn primary">Submit</button>

            <label htmlFor="">UserName</label>
            <input type="text" placeholder='Username' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password'  />
            <button>Submit</button>

        </div>
    );
};


export default LoginForm;



