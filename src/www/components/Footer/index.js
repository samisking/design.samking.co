import React from 'react';
import styles from './Footer.css';

const date = new Date();
const year = date.getFullYear();

const Footer = () =>
  <div className={styles.footer}>
    <span className={styles.copy}>Copyright Sam King, {year}</span>
  </div>;

export default Footer;
