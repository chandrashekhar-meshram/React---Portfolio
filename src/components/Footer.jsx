import React from "react";

function Footer() {

  return(
    <footer>
      <div className="container">
        <span className="logo">Shekhar.</span>
        <div className="links">
          <a href="https://github.com/chandrashekhar-meshram" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/chandrashekhar-meshram-3b8350231/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@letsplayvirtualsportscompa5570" target="_blank">
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