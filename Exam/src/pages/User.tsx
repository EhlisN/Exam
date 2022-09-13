import React from 'react';
import './User.css';

const User = () => {
  const userData = localStorage;
  return (
    <div className='col my-5 p-0 myShadow'>
      <div className='card user'>
        <div
          className='showImg mx-auto mt-4 myShadow'
          style={{ backgroundImage: `url(${userData.image})` }}
        ></div>
        <div className='card-body h-50'>
          <h3 className='card-title mt-3 text-danger'>{userData.username}</h3>
          <p className='card-text'>
            Name: {userData.firstName} {userData.lastName}
          </p>
          <p className='card-text'>Email: {userData.email}</p>
          <p className='card-text'>Gender: {userData.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
