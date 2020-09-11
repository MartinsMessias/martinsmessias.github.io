import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  lang: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <a href={props.link}>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          {props.lang ? <span className="badge">{props.lang}</span> : <p></p>}
          <p className="card-subtitle">{props.description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
