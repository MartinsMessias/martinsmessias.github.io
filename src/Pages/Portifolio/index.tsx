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
      <div className="row">
        <div className="container container-portifolio">
          <h3 className="title">Portifólio de projetos</h3>
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
            {/* 
            <div>
              <Card title="Teste 1" description="descricao" link="teste.com" />
            </div>
            <div>
              <Card title="Teste 1" description="descricao" link="teste.com" />
            </div>
            <div>
              <Card title="Teste 1" description="descricao" link="teste.com" />
            </div>
            <div>
              <Card title="Teste 1" description="descricao" link="teste.com" />
            </div>
            <div>
              <Card title="Teste 1" description="descricao" link="teste.com" />
            </div>
            <div>
              <Card title="Teste 1" description="descricao" link="teste.com" />
            </div> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default Portifolio;
