"use client";
import './Navbar.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
      document.querySelectorAll('.nav-links a').forEach((link) => link.classList.remove('active'));
      document.querySelector(`.nav-links a[href="#${id}"]`)?.classList.add('active');
    } else {
      console.log(`Element with id "${id}" not found!`);
    }
  };

  return (
    <nav id="navbar">
      <div className="container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image src="/images/logocopy.png" alt="CTF logo" width={150} height={50} className="logo-icon" />
        </div>
        <div className={`menu-burger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>Про нас</a></li>
          <li><a href="#offers" onClick={(e) => { e.preventDefault(); handleNavClick('offers'); }}>Пропозиції</a></li>
          <li><a href="#stats" onClick={(e) => { e.preventDefault(); handleNavClick('stats'); }}>Статистика</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Контакти</a></li>
          <li><a href="#partner" onClick={(e) => { e.preventDefault(); handleNavClick('partner'); }} className="partner-button">Стати партнером</a></li>
        </ul>
      </div>
    </nav>
  );
}