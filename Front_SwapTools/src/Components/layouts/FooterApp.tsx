import React from "react";

export const FooterApp = () => {
  return (
    <footer className="footer-app-bottom fixed-bottom text-center bg-light">
      <div className="container footer-app-bottom-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
          Copyright © 2024 SwapTools
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <ul className="col-md-4 footer-app-bottom-menu">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
