import PropTypes from "prop-types";
import React from "react";
import "./navbar.css";

export const Navbar = ({ breakpoint, className, signUpClassName, buttonClassName }) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="container">
        <div className="content" />
        <div className="column">
          <div className="nav-links">
            <div className="link">
              <div className="text-wrapper">Consulta</div>
            </div>
            <div className="link">
              <div className="text-wrapper">Plano</div>
            </div>
            <div className="link">
              <div className="text-wrapper">Contato</div>
            </div>
            <div className="link">
              <div className="nav-link-dropdown">
                <div className="text-wrapper">Artigos</div>
              </div>
            </div>
          </div>
          <div className="actions">
            <div className="sign-in">
              <button className="button">Sign in</button>
            </div>
            <button className={`sign-up ${signUpClassName}`}>
              <button className={`div ${buttonClassName}`}>Sign up</button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop"]),
};