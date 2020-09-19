import React from 'react';
import './footer.css'

function Footer() {
  return (
        <footer className="main-footer">
        <div className="contact-links">
            <a href="#">Blog</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Patreon</a>
            <a href="#">Donate</a>
        </div>
        <div className="copyleft">
            <span>🄯 Ryan Schachte 2020 </span>
            <span
            >Theme Designed With
            <ion-icon name="heart-outline" className="heart"></ion-icon> by Ryan
            Schachte In Phoenix, Arizona 🌵</span
            >
        </div>
        </footer>
    );
}

export default Footer;