import React, { useEffect, useState } from "react";

import Card from "../../Components/Card";
import api from "../../services/api";
import Header from "../../Components/Header";

interface GithubProject {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  fork: boolean;
}

const Portifolio = () => {
  const [projects, setProjects] = useState<GithubProject[]>([]);

  useEffect(() => {
    api.get("repos?sort=pushed").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <h1 className="section-title">Portfólio</h1>
            <p className="section-description">Projetos reais, com foco em performance, experiência e código escalável.</p>
            <div id="cards-section">
              {projects.length > 0 ? (
                projects.map((project) => {
                  if (project.fork === false)
                    return (
                      <Card
                        key={project.id}
                        title={project.name}
                        description={project.description || ""}
                        link={project.html_url}
                        lang={project.language || ""}
                      />
                    );
                  return null;
                })
              ) : (
                <div className="loading-state">
                  <div className="spinner" aria-label="Carregando projetos" />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portifolio;
