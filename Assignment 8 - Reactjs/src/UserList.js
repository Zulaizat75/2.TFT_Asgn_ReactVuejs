import React, { useState, useEffect } from 'react';
import './App.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  //async function is use to fetch data from api and set it to state variable userdata as soon as data is fetched from api it will be set to state variable
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the user data from any website using API
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/users');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsers(data.users); // set the fetched data assigned to users
      } catch (error) {
        console.error('Error fetching Sling Academy user data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Fetch User Data - SlingAcademy API</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
          <img src={user.profile_picture} alt={user.first_name} className="profile-picture" />
          {/* Show the user information atleast 3 types */}
          <div className="user-details">
            <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Job:</strong> {user.job}</p>
            <p><strong>Country:</strong> {user.state} , {user.country}</p>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;