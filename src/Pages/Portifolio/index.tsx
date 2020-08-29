import React, { useState, useEffect } from "react";

// Personalização
import "./styles.css";
import Card from "../../Components/Card";
import api from "../../services/api";

const Portifolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("repos?sort=pushed").then((res) => {
      setProjects(res["data"]);
    });
  }, []);

  return (
    <>
      <div className="container-cards">
        <div className="row">
          <h3 className="title title-cards">Portifólio de projetos</h3>
        </div>

        <section className="card-list">
          {projects.map((project) => {
            if (project["fork"] == 0)
              return (
                <Card
                  title={project["name"]}
                  description={project["description"]}
                  link={project["html_url"]}
                />
              );
          })}
        </section>
      </div>
    </>
  );
};

export default Portifolio;
