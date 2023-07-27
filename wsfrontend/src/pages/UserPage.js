import React from 'react';
import maintenance from "../assets/maintenance2.jpg"
import ProfileCard from '../components/ProfileCard';

const UserPage = (props) => {
    return (
        <div className='container'>
            <div>
               <ProfileCard /> 
            </div>
            <h1 className='text-center'>Profile</h1>
            <img className='rounded mx-auto d-block' width="500" src={maintenance}  alt="Maintanence" />
        </div>
    );
};

export default UserPage;