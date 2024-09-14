import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';

function App() {
  const [user, setUser] =useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => setUser(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? ( //Put all the objects of the user into an array
    <div>
      <h1>Data Returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data Pending...</h1>
  );

}

export default App;
