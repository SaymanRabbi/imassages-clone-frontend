import { Avatar, IconButton } from '@mui/material';
import { useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchIcon from '@mui/icons-material/Search';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SidebarChat from '../SidebarChat/SidebarChat';
import { selectUser} from '../../features/userSlice';
import db,{ auth } from '../firebase';

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [chats, setChats] = useState([])
    useEffect(() => {
        db.collection('chat').onSnapshot(snapshot => (setChats(snapshot.docs.map(doc => ({
            id: doc?.id,
            data:doc?.data()
        })))
        ))
    }, [])
    const addChat = () => {
        const chatName = prompt('Enter a Chat Name')
        if (chatName) { 
            db.collection('chat').add({
                chatName: chatName
            }) 
        }
          
    }
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar onClick={()=>auth.signOut()} src={user?.photo}  className='sidebar_avatar'/>
                <div className="sidebar_input">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
                
                <IconButton variant="outlined" className = "sidebar_inputButton">
                    <RateReviewIcon onClick={addChat} />
               </IconButton>
            </div>
            <div className="sidebar_chats">
                {
                    chats.map(({ id, data: { chatName } }) => <SidebarChat key={id} chatname={chatName} />
                    )
                }
                
                
            </div>
            
        </div>
    );
};

export default Sidebar;