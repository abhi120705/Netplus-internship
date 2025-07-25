import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('register');
  const [userType, setUserType] = useState('employee');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    employeeId: '',
    customerId: '',
    phone: '',
    address: ''
  });
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, type: userType };
    setUsers([...users, newUser]);
    alert(`${userType} registered successfully!`);
    setFormData({
      name: '',
      email: '',
      password: '',
      employeeId: '',
      customerId: '',
      phone: '',
      address: ''
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (user) {
      setLoggedInUser(user);
      alert(`Welcome back, ${user.name}!`);
    } else {
      alert('Invalid credentials!');
    }
    setLoginData({ email: '', password: '' });
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="https://via.placeholder.com/150x50?text=NetPlus+Logo" alt="NetPlus Logo" className="logo" />
          <h1>NetPlus Internship Portal</h1>
          <img src="https://via.placeholder.com/150x50?text=NetPlus+Logo" alt="NetPlus Logo" className="logo" />
        </div>
      </header>

      <main>
        {loggedInUser ? (
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
        ) : (
          <>
            <div className="tabs">
              <button
                className={activeTab === 'register' ? 'active' : ''}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
              <button
                className={activeTab === 'login' ? 'active' : ''}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
            </div>

            {activeTab === 'register' ? (
              <div className="form-container">
                <h2>Register as {userType}</h2>
                <div className="user-type-toggle">
                  <button
                    className={userType === 'employee' ? 'active' : ''}
                    onClick={() => setUserType('employee')}
                  >
                    Employee
                  </button>
                  <button
                    className={userType === 'customer' ? 'active' : ''}
                    onClick={() => setUserType('customer')}
                  >
                    Customer
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {userType === 'employee' && (
                    <div className="form-group">
                      <label>Employee ID:</label>
                      <input
                        type="text"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                  {userType === 'customer' && (
                    <div className="form-group">
                      <label>Customer ID:</label>
                      <input
                        type="text"
                        name="customerId"
                        value={formData.customerId}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit">Register</button>
                </form>
              </div>
            ) : (
              <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
            )}
          </>
        )}
      </main>

      <footer>
        <p>NetPlus Internship Project © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;