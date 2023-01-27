import React from "react";

function Footer() {

  return(
    <footer>
      <div className="container">
        <span className="logo">Shekhar.</span>
        <div className="links">
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Shekhar
        </p>
      </div>
    </footer>
  )
}

export default Footer;