// components/Navbar.jsx
"use client";

import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyLogo</div>
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.active : ''}`}></div>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Services</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;