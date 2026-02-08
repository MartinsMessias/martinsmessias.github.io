import React, { useEffect, useMemo, useState } from "react";

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
  stargazers_count: number;
}

const Portifolio = () => {
  const [projects, setProjects] = useState<GithubProject[]>([]);

  useEffect(() => {
    api.get("repos?sort=pushed").then((res) => {
      setProjects(res.data);
    });
  }, []);

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.fork === false),
    [projects]
  );

  const totalStars = filteredProjects.reduce((acc, project) => acc + project.stargazers_count, 0);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="portfolio-header glass-card">
              <h1 className="section-title">Portfólio</h1>
              <p className="section-description">
                Projetos com código público, evolução contínua e foco em arquitetura de produto.
              </p>
              <div className="portfolio-metrics">
                <div>
                  <strong>{filteredProjects.length}</strong>
                  <span>projetos públicos</span>
                </div>
                <div>
                  <strong>{totalStars}</strong>
                  <span>estrelas no GitHub</span>
                </div>
              </div>
            </div>

            <div id="cards-section">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    title={project.name}
                    description={project.description || ""}
                    link={project.html_url}
                    lang={project.language || ""}
                  />
                ))
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
