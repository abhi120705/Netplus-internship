import React from 'react';
import '../../index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} NetPlus Internship. All rights reserved.</span>
    </footer>
  );
}
