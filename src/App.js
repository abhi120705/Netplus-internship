import React, { useState } from 'react';
import './App.css';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import UserDetails from './components/user/UserDetails';

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
          <UserDetails loggedInUser={loggedInUser} handleLogout={handleLogout} />
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
              <RegisterForm
                userType={userType}
                setUserType={setUserType}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            ) : (
              <LoginForm
                loginData={loginData}
                handleLoginChange={handleLoginChange}
                handleLogin={handleLogin}
              />
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