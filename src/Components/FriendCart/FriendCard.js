import React from 'react';

const FriendCard = (props) => {
    console.log(props);
    const addedfriend = props.addedfriend;
    let totalAddedFriendYearlyIncome = 0;
    { addedfriend.map(friend => totalAddedFriendYearlyIncome += Number(friend.Yearly_income)) }

    const formatToNumber=(num)=>{
        const precision = num.toFixed(3);
        return Number(precision);
    }
    return (
        <div>
            <h5>Total Added Friends: {addedfriend.length}</h5>
            <p>Added Friends Total Yearly Income {formatToNumber(totalAddedFriendYearlyIncome) }</p>
        </div>
    );
};

export default FriendCard;