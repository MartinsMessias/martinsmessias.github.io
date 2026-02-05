import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  lang: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, lang }) => {
  return (
    <article className="card glass-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card-body">
          <div className="card-top">
            <h4 className="card-title">{title}</h4>
            {lang ? <span className="badge">{lang}</span> : null}
          </div>
          <p className="card-subtitle">
            {description || "Projeto publicado no GitHub com foco em qualidade e evolução contínua."}
          </p>
          <span className="card-cta">Acessar repositório →</span>
        </div>
      </a>
    </article>
  );
};

export default Card;
