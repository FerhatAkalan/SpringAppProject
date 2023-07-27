// Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-auto py-3 bg-light fixed-bottom">
      <div className="container d-flex justify-content-center">
        <span className="text-muted">
          © {currentYear} SocialCoffee coded by{" "}
          <a
            href="https://www.linkedin.com/in/ferhatakalan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            Ferhat Akalan
          </a>{" "}
          <a
            href="https://github.com/FerhatAkalan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            Github
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
