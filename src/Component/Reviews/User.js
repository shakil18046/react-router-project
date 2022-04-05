import React from 'react';
import "./User.css"
const User = ({user}) => {
    const {name, review, rating} = user;
    return (
        <div className='all-user-review'>
            <h1>{name}</h1>
            <p>{review}</p>
            <p>{rating}</p>
        </div>
    );
};

export default User;