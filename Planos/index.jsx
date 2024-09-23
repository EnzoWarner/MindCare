import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Pricing = ({ breakpoint, className, sectionTitleClassName, contentClassName }) => {
  return (
    <div className={`pricing ${className}`}>
      <div className={`section-title ${sectionTitleClassName}`}>
        <div className="tagline-wrapper" />
        <div className="content">
          <div className="heading">Preço dos planos</div>
          <div className="text">Benefícios de cada plano:</div>
        </div>
      </div>
      <div className={`div ${contentClassName}`}>
        <div className="column">
          <div className="content-2">
            <div className="price">
              <div className="text-wrapper">Plano Basico</div>
              <p className="p">
                <span className="span">R$ 29,90</span>
                <span className="text-wrapper-2">/mês</span>
              </p>
              <div className="text-2">ou R$ 358,80 ano</div>
            </div>
            <div className="list">
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Acesso básico</div>
              </div>
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Suporte via email</div>
              </div>
              <div className="list-item" />
            </div>
          </div>
          <div className="actions">
            <button className="button">
              <button className="button-2">Assinar</button>
            </button>
          </div>
        </div>
        <div className="column">
          <div className="content-2">
            <div className="price">
              <div className="text-wrapper">Plano Padrão</div>
              <p className="p">
                <span className="span">R$ 49,90</span>
                <span className="text-wrapper-2">/mês</span>
              </p>
              <div className="text-2">ou R$ 598,80 Ano</div>
            </div>
            <div className="list">
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Acesso completo</div>
              </div>
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Suporte via email</div>
              </div>
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Suporte via chat</div>
              </div>
            </div>
          </div>
          <button className="button-wrapper">
            <button className="button">
              <button className="button-2">Get started</button>
            </button>
          </button>
        </div>
        <div className="column-2">
          <div className="content-3">
            <div className="price">
              <div className="text-wrapper">Plano Premium</div>
              <p className="p">
                <span className="span">R$ 79,90</span>
                <span className="text-wrapper-2">/mês</span>
              </p>
              <div className="text-2">ou R$ 958,80 Ano</div>
            </div>
            <div className="list">
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Acesso total</div>
              </div>
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Suporte via email</div>
              </div>
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Suporte via chat</div>
              </div>
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Suporte 24h</div>
              </div>
              <div className="list-item">
                <img className="check" alt="Check" />
                <div className="text-3">Conteúdo exclusivo</div>
              </div>
            </div>
          </div>
          <button className="button-wrapper">
            <button className="button">
              <button className="button-2">Get started</button>
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

Pricing.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop"]),
};