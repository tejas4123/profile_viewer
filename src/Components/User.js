import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        const user = response.data.results[0];
        setUserData(user);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Information</h2>
          <p>User Name: {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</p>
          <p>User Email: {userData.email}</p>
          <p>User Location: {`${userData.location.city}, ${userData.location.state}, ${userData.location.country}`}</p>
          <img src={userData.picture.large} alt="User" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;
