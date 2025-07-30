import React, { useState } from 'react';
import '../App.css';

const logoPath = process.env.PUBLIC_URL + '/assets/images/netplus-logo.png';

export default function LoginPage() {
  const [userType, setUserType] = useState('employee');
  const [login, setLogin] = useState({ email: '', password: '' });
  const [loginResult, setLoginResult] = useState(null);

  // Dummy credentials for demonstration
  const dummyEmployee = { email: 'employee@netplus.com', password: 'employee123', name: 'John Doe', employeeId: 'EMP001' };
  const dummyCustomer = { email: 'customer@netplus.com', password: 'customer123', name: 'Jane Smith', customerId: 'CUST001' };

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let result = null;
    if (userType === 'employee') {
      if (
        login.email === dummyEmployee.email &&
        login.password === dummyEmployee.password
      ) {
        result = `Welcome Employee: ${dummyEmployee.name} (ID: ${dummyEmployee.employeeId})`;
      } else {
        result = 'Invalid employee credentials.';
      }
    } else {
      if (
        login.email === dummyCustomer.email &&
        login.password === dummyCustomer.password
      ) {
        result = `Welcome Customer: ${dummyCustomer.name} (ID: ${dummyCustomer.customerId})`;
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
        <div className="demo-credentials">
          <p><strong>Demo Employee:</strong> employee@netplus.com / employee123</p>
          <p><strong>Demo Customer:</strong> customer@netplus.com / customer123</p>
        </div>
      </div>
    </div>
  );
}
