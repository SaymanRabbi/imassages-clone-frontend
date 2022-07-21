import React, { useState } from 'react';
import MicNoneIcon from '@mui/icons-material/MicNone';
import './Chat.css';
import { IconButton } from '@mui/material';
import Messages from '../Messages/Messages';

const Chat = () => {
    const [input,setInput] = useState('')
    const sendMessage = (e) => { 
        e.preventDefault();
        console.log(input);
        setInput('');
    }
    return (
        <div className='chat'>
            {/* Chat Header */}
            <div className='chat__header'>
                <h4>To: <span className='chat__name'>
                Chanel Name
                </span></h4>
                <strong>Details</strong>
                </div>
            {/* Chat Messages */}
            <div className='chat__messages'>
                 <Messages/>
                </div>
            {/* Chat input */}
            <div className="chat__input">
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder='iMassge' />
                    <button type='submit' onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                <MicNoneIcon className="chat__mic"/>
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;