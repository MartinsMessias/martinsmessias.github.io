import React, { useState, useEffect } from "react";

// Personalização
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
    <main>
      <section>
        <div className="container">
          <h1 className="section-title">Portfólio</h1>
          <div id="cards-section">
            {projects.map((project) => {
              if (project["fork"] == 0)
                return (
                  <Card
                    title={project["name"]}
                    description={project["description"]}
                    link={project["html_url"]}
                    lang={project["language"]}
                  />
                );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portifolio;
