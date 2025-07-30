import React from 'react';

const UserDetails = ({ loggedInUser, handleLogout }) => (
  <div className="user-details">
    <h2>Welcome, {loggedInUser.name}!</h2>
    <p>Email: {loggedInUser.email}</p>
    <p>Type: {loggedInUser.type}</p>
    {loggedInUser.type === 'employee' && <p>Employee ID: {loggedInUser.employeeId}</p>}
    {loggedInUser.type === 'customer' && <p>Customer ID: {loggedInUser.customerId}</p>}
    <p>Phone: {loggedInUser.phone}</p>
    <p>Address: {loggedInUser.address}</p>
    <button onClick={handleLogout}>Logout</button>
  </div>
);

export default UserDetails;



