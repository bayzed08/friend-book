import React from 'react';
import friendLogo from '../../images/friendship.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={friendLogo} alt=""/>
        </div>
    );
};

export default Header;