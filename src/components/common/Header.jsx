import React from 'react';
import '../../index.css';

const logoPath = process.env.PUBLIC_URL + '/assets/images/netplus-logo.png';

export default function Header() {
  return (
    <header className="header">
      <img src={logoPath} alt="NetPlus Logo" className="logo left" />
      <h1 className="title">NetPlus Internship Portal</h1>
      <img src={logoPath} alt="NetPlus Logo" className="logo right" />
    </header>
  );
}
