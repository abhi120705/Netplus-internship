import React from 'react';
import '../../index.css';

export default function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="toggle-buttons">
      <button
        className={activeTab === 'employee' ? 'active' : ''}
        onClick={() => onTabChange('employee')}
        type="button"
      >
        Employee
      </button>
      <button
        className={activeTab === 'customer' ? 'active' : ''}
        onClick={() => onTabChange('customer')}
        type="button"
      >
        Customer
      </button>
    </div>
  );
}
