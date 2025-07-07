'use client';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="navbar">
      <div className="container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/images/logocopy.png" alt="CTF logo" className="logo-icon" />
        </div>
        <div className={`menu-burger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Про нас</a></li>
          <li><a href="#offers" onClick={() => setIsMenuOpen(false)}>Пропозиції</a></li>
          <li><a href="#stats" onClick={() => setIsMenuOpen(false)}>Статистика</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Контакти</a></li>
          <li><a href="#partner" onClick={() => setIsMenuOpen(false)}>Стати партнером</a></li>
        </ul>
      </div>
    </nav>
  );
}