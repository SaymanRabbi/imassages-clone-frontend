import { Button } from '@mui/material';
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className="Login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt="" />
                <h1>iMessage</h1>
            </div>
            <Button>Sign In</Button>
        </div>
    );
};

export default Login;