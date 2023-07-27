import React from 'react';
import maintenance from '../assets/maintenance.jpg'
import UserList from '../components/UserList';
const HomePage = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <UserList/>
            <img className='rounded mx-auto d-block' width="600" src={maintenance}  alt="Maintanence" />
        </div>
    );

   
};

export default HomePage;