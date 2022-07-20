import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './Imessages.css';

const Imessages = () => {
    return (
        <div className='imessage'>
            {/* Sidebar */}
            <Sidebar/>
            {/* chat */}
            <Chat/>
        </div>
    );
};

export default Imessages;