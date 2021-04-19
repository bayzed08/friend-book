import React, { useEffect, useState } from 'react';
import './Userinfo.css';
import MockData from '../../MockData/mock-data.json';
import Friends from '../Friends/Friends';
import FriendCard from '../FriendCart/FriendCard';


const UserInfo = () => {

    const [users, setUsers] = useState([]);


    //  useEffect(() => {
    //      fetch("https://mocki.io/fake-json-api/https://mocki.io/v1/c56ece22-f078-4a7b-9533-8ad2b3779512")
    //          .then(res => res.json())
    //          .then(data => {
    //              console.log(data);
    //              setUsers(data);
    //          }
    // )
    //  }, []);

     useEffect(() => {
      // console.log(MockData);
         setUsers(MockData);
     }, []);

    // Added friend From Friend.js
    const [added, setAdded] = useState([]);
    const handleAddFriend = (friend) => {
       // console.log("Added", friend, added.length);
        const newAdd = [ ...added , friend];
        //const newCart = [...cart, product];
        //setCart(newCart);
        setAdded(newAdd);
       // console.log("Friend Added", added.length);
    };


    return (
        <div className="all-user-info">
            <div className="user-info">
                <h3>This is User Info</h3>
                {users.map(user =>
                    <Friends
                        userinfo={user}
                        key={user.id} //not Working but
                        handleAddFriend={handleAddFriend}
                    ></Friends>)
                }
            </div>
            <div className="user-cart-info">
            <h3>Friend Cart Zone</h3>
                <FriendCard addedfriend={added}></FriendCard>
            </div>
        </div>
    );
};

export default UserInfo;