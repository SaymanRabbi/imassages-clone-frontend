import { Avatar,IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import SearchIcon from '@mui/icons-material/Search';
import RateReviewIcon from '@mui/icons-material/RateReview';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />
                <div className="Sidebar_input">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
                
                <IconButton variant="outlined" className = "sidebar_inputButton">
                <RateReviewIcon/>
               </IconButton>
            </div>
            <div className="sidebar_chats">

            </div>
            
        </div>
    );
};

export default Sidebar;