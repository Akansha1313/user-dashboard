import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to fetch users. Please try again later.');
          setLoading(false);
        });
    }, 2000);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     
      <Header />

      <div className="section-wrapper">
        <h3 className="dashboard-heading">User Dashboard</h3>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-btn">Filter</button>
        </div>

        {error && <p className="error">{error}</p>}

        {loading ? (
          <p className="loader-text">Loading users...</p>
        ) : (
          <div className="card-grid">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} onView={() => setSelectedUser(user)} />
            ))}
          </div>
        )}

        {selectedUser && (
          <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>

      
      <Footer />
    </>
  );
}

export default App;
