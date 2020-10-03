import React from 'react';
import "../../App.css"
import './navigation.css'
import IosMoonOutlineJS from 'react-ionicons/lib/IosMoonOutline'
import Link from 'next/link'

function toggle_light_mode() {
  let app = document.getElementsByTagName("BODY")[0];
  if (localStorage.schachteTheme === "dark") {
    localStorage.schachteTheme = "light";
    app.setAttribute("data-theme", "light");
  } else {
    localStorage.schachteTheme = "dark";
    app.setAttribute("data-theme", "dark");
  }
}

function toggle_menu_close() {
    window.scrollTo(0, 0);
    var element = document.getElementsByClassName("overlay")[0];
    element.classList.toggle("collapsed");
}

function Navigation() {
  return (
      <header>
        <div className="header-overlay"></div>
        <nav>
          <div className="inner-nav-container">
            <div className="hamburger-container" onClick={() => toggle_menu_close()}>
              <svg viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </div>
            <div className="search-container">
              <div className="search-results">
                <div className="input-container search-large">
                  <ion-icon name="search-outline" id="search-icon"></ion-icon>
                  <input type="text" placeholder="Search articles and videos" />
                </div>
                <div className="input-container search-small">
                  <ion-icon name="search-outline" id="search-icon"></ion-icon>
                  <input type="text" placeholder="Search Articles & Videos" />
                </div>
              </div>
            </div>
            <div className="links-container">
              <Link href="/">
                Home
              </Link>
              <a href="#">Blog</a>
              <a href="https://youtube.com/thesimpleengineer" target="_blank">Youtube</a>
              <a href="#">About</a>
              <Link href="/contact">
                Contact
              </Link>
            </div>
            <div className = "moon-container">
              <IosMoonOutlineJS onClick={() => toggle_light_mode()} className="moon" />
            </div>
          </div>

          <div className="overlay">
            <ul>
              <li>Home.</li>
              <li>Youtube.</li>
              <li>Blog.</li>
              <li>LinkedIn.</li>
              <li>Twitter.</li>
            </ul>
          </div>
        </nav>
      </header>
    );
}

export default Navigation;