import React from 'react';

const LoginForm = ({ loginData, handleLoginChange, handleLogin }) => (
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
);

export default LoginForm;
