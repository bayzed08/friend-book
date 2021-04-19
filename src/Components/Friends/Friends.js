import React from 'react';
import './Friends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Friends = (props) => {
    //console.log(props);
    const { uname, picture, email, Mobile, Yearly_income } = props.userinfo;
    return (
        <div className="friend-all" >
            <div className="friend-image">
                <img src={picture} alt="" />
                <p>{ uname}</p>
            </div>
            <div className="friend-info">
                <h3>Name:{uname}</h3>
                <p>Email Id: {email}</p>
                <p>Mobile: {Mobile}</p>
                <p>Yearly Income: ${Yearly_income}</p>
                <button onClick={() =>
                { props.handleAddFriend(props.userinfo) }}>
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Add to Friend
                </button>
            </div>
        </div>
    );
};

export default Friends;