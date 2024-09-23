import PropTypes from "prop-types";
import React from "react";
import placeholderImage from "../appuser/placeholder-image.png";
import "./header.css";

export const Header = ({ breakpoint, className, buttonClassName, buttonClassNameOverride }) => {
  return (
    <div className={`header ${className}`}>
      <div className="column-2">
        <div className="content-2">
          <p className="medium-length-hero">
            <span className="span">
              MindCare
              <br />
            </span>
            <span className="text-wrapper-2">Onde medicos, pacientes e familiares se encontram</span>
          </p>
          <p className="lorem-ipsum-dolor">
            Cuidar da sua saúde mental nunca foi tão acessível e seguro. Na MindCare, médicos especialistas e pacientes
            se encontram em um ambiente online dedicado ao bem-estar emocional e psicológico. Inscreva-se e faça parte
            dessa jornada de cuidado e acolhimento. Venha para a MindCare!
          </p>
        </div>
        <div className="actions-2">
          <button className={`button-wrapper ${buttonClassName}`}>
            <button className={`button-2 ${buttonClassNameOverride}`}>Inscreva-se</button>
          </button>
          <button className="div-wrapper">
            <button className="button-3">Login</button>
          </button>
        </div>
      </div>
      <img className="placeholder-image" alt="Placeholder image" src={placeholderImage} />
    </div>
  );
};

Header.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop"]),
};