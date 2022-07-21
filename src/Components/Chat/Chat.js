import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
    const [input,setInput] = useState('')
    const sendMessage = (e) => { 
        e.preventDefault();
        console.log(input);
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
            {/* Chat input */}
            <div className="chat__input">
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder='iMassge' />
                    <button type='submit' onClick={sendMessage}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;