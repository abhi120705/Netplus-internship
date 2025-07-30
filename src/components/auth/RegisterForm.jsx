import React from 'react';

const RegisterForm = ({ userType, formData, handleInputChange, handleSubmit, setUserType }) => (
  <div className="form-container">
    <h2>Register as {userType}</h2>
    <div className="user-type-toggle">
      <button
        className={userType === 'employee' ? 'active' : ''}
        onClick={() => setUserType('employee')}
        type="button"
      >
        Employee
      </button>
      <button
        className={userType === 'customer' ? 'active' : ''}
        onClick={() => setUserType('customer')}
        type="button"
      >
        Customer
      </button>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
      </div>
      {userType === 'employee' && (
        <div className="form-group">
          <label>Employee ID:</label>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleInputChange} required />
        </div>
      )}
      {userType === 'customer' && (
        <div className="form-group">
          <label>Customer ID:</label>
          <input type="text" name="customerId" value={formData.customerId} onChange={handleInputChange} required />
        </div>
      )}
      <div className="form-group">
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleInputChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
);

export default RegisterForm;
