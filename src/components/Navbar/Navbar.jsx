import { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ai from "../../assets/ai.jpg";
// import "./Navbar.js";
export default function Navbar() {
  useEffect(() => {
    // Use the useEffect hook to add event listeners
    const hamburgerBtn = document.getElementById("hamburger");
    const navMenu = document.querySelector(".menu");

    function toggleHamburger() {
      navMenu.classList.toggle("show");
    }

    // toggle hamburger menu
    hamburgerBtn.addEventListener("click", toggleHamburger);

    return () => {
      // Cleanup the event listener on unmount
      hamburgerBtn.removeEventListener("click", toggleHamburger);
    };
  }, []); // Provide an empty dependency array to run the effect only once

  return (
    <>
      <header id="nav-menu" aria-label="navigation bar">
        <div className="container">
          <div className="nav-start">
            <a className="logo" href="/">
              <img src={ai} width="35" height="35" alt="Inc Logo" />
            </a>
            <nav className="menu">
              <ul className="menu-bar">
                <li>
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <Link className="nav-link" to="/Product">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/About">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="nav-end">
            <Link className="aibtn" to="/Chat">
              Customer Support
            </Link>

            <button
              id="hamburger"
              aria-label="hamburger"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-menu" aria-hidden="true">
                ...
              </i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
