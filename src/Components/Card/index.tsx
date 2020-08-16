import React from "react";

// Personalização
import "./styles.css";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">{props.title}</p>
      </div>
      <div className="card-body">
        <p className="card-body-text">{props.description}</p>
      </div>
      <div className="card-footer">
        <a className="card-btn" href={props.link}>
          Quero ver
        </a>
      </div>
    </div>
  );
};

export default Card;
