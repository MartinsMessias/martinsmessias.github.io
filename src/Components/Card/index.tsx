import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  lang: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, lang }) => {
  return (
    <article className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {lang ? <span className="badge">{lang}</span> : null}
          <p className="card-subtitle">
            {description || "Projeto publicado no GitHub com foco em qualidade e evolução contínua."}
          </p>
          <span className="card-cta">Ver repositório →</span>
        </div>
      </a>
    </article>
  );
};

export default Card;
