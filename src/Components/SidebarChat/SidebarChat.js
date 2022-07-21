import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css';

const SidebarChat = () => {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat__info'>
                <h3>Chanel Name</h3>
                <p>Last Message sent...</p>
                <small>times</small>
                </div>
        </div>
    );
};

export default SidebarChat;