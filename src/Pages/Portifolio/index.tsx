import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

// Personalização
import Card from "../../Components/Card";
import api from "../../services/api";
import Header from "../../Components/Header";

const Portifolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("repos?sort=pushed").then((res) => {
      setProjects(res["data"]);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <h1 className="section-title">Portfólio</h1>
            <div id="cards-section">
              {projects.length > 0 ? (
                projects.map((project) => {
                  if (project["fork"] == 0)
                    return (
                      <Card
                        title={project["name"]}
                        description={project["description"]}
                        link={project["html_url"]}
                        lang={project["language"]}
                      />
                    );
                })
              ) : (
                <Loader type="Grid" color="#0000030" height={80} width={80} />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portifolio;
