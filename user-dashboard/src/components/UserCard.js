import React from 'react';
import './UserCard.css';

function UserCard({ user, onView }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <button className="view-btn" onClick={onView}>View Details</button>
    </div>
  );
}

export default UserCard;
