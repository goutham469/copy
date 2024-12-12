import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './DiscoverPeople.css';
import img1 from './FacebookIcon.webp';
import UserCard from './UserCard/UserCard';

function DiscoverPeople() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const [searchValue, changeSearchValue] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []); // Fetch data when component mounts

  function getData() {
    fetch('http://localhost:4000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Store users in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  // Filter and render users based on searchValue
  const filteredUsers = users.filter((user) =>
    user.user_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className='row'>
        <div className='col-lg-1'>
          <img src={img1} className='HeaderIcon' alt='Facebook Icon' />
        </div>
        <div className='col-lg-1'>
          <input
            onChange={(event) => changeSearchValue(event.target.value)}
            placeholder='Search by username'
            type='text'
            className='DiscoverPeopleSearchBar'
          />
        </div>
      </div>
      <div className='row'>
        {filteredUsers.map((user, index) => (
          <div key={index} className='col-lg-4'>
            <UserCard using={state} userData={user}></UserCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscoverPeople;
