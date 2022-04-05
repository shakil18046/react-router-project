import React from 'react';
import "./User.css"
const User = (props) => {
    const {name, rating, review} = props.user;
    console.log(name)
    return (
            <div className='singel-review'>
                <h1>{name}</h1>
                <p>{review}</p>
                <p>{rating}</p>
            </div>
    );
};

export default User;