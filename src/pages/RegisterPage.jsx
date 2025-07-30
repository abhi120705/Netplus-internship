import React, { useState } from 'react';
import '../App.css';

const logoPath = process.env.PUBLIC_URL + '/assets/images/netplus-logo.png';

const initialEmployee = { name: '', email: '', password: '', employeeId: '' };
const initialCustomer = { name: '', email: '', password: '', customerId: '' };

export default function RegisterPage() {
  const [userType, setUserType] = useState('employee');
  const [employee, setEmployee] = useState(initialEmployee);
  const [customer, setCustomer] = useState(initialCustomer);
  const [registered, setRegistered] = useState(false);
  const [login, setLogin] = useState({ email: '', password: '' });
  const [loginResult, setLoginResult] = useState(null);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'employee') {
      setEmployee({ ...employee, [name]: value });
    } else {
      setCustomer({ ...customer, [name]: value });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistered(true);
    setLogin({ email: '', password: '' });
    setLoginResult(null);
  };

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let result = null;
    if (userType === 'employee') {
      if (
        login.email === employee.email &&
        login.password === employee.password
      ) {
        result = `Welcome Employee: ${employee.name} (ID: ${employee.employeeId})`;
      } else {
        result = 'Invalid employee credentials.';
      }
    } else {
      if (
        login.email === customer.email &&
        login.password === customer.password
      ) {
        result = `Welcome Customer: ${customer.name} (ID: ${customer.customerId})`;
      } else {
        result = 'Invalid customer credentials.';
      }
    }
    setLoginResult(result);
  };

  return (
    <div className="homepage-container">
      <header className="header">
        <img src={logoPath} alt="NetPlus Logo" className="logo left" />
        <h1 className="title">NetPlus Internship Portal</h1>
        <img src={logoPath} alt="NetPlus Logo" className="logo right" />
      </header>
      <div className="form-container">
        <div className="toggle-buttons">
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
        {!registered ? (
          <form className="register-form" onSubmit={handleRegister}>
            <h2>Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userType === 'employee' ? employee.name : customer.name}
              onChange={(e) => handleInputChange(e, userType)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userType === 'employee' ? employee.email : customer.email}
              onChange={(e) => handleInputChange(e, userType)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userType === 'employee' ? employee.password : customer.password}
              onChange={(e) => handleInputChange(e, userType)}
              required
            />
            {userType === 'employee' ? (
              <input
                type="text"
                name="employeeId"
                placeholder="Employee ID"
                value={employee.employeeId}
                onChange={(e) => handleInputChange(e, 'employee')}
                required
              />
            ) : (
              <input
                type="text"
                name="customerId"
                placeholder="Customer ID"
                value={customer.customerId}
                onChange={(e) => handleInputChange(e, 'customer')}
                required
              />
            )}
            <button type="submit">Register</button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={login.email}
              onChange={handleLoginInput}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={handleLoginInput}
              required
            />
            <button type="submit">Login</button>
            {loginResult && <div className="login-result">{loginResult}</div>}
          </form>
        )}
      </div>
    </div>
  );
}
