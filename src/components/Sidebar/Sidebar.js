import React from 'react';
import "./sidebar.css";
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const {name} = useSelector(state => state.user);
    
    return (
        <div className='sidebar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
                <li>Blog</li>
                <li>Hello <span> {name} </span> </li>
            </ul>
        </div>
    );
};

export default Sidebar;
