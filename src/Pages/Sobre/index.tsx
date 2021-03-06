import React from "react";
import Header from "../../Components/Header";

const SobrePage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <h1 className="section-title">Sobre mim</h1>
            <div id="about-section">
              <img
                src="https://github.com/MartinsMessias.png"
                alt="Foto de perfil"
                className="image"
              />
              <h3 className="title">Messias de Souza Martins</h3>
              <p className="description-about">
                Graduando em Sistemas de Informação, experiêcia com
                desenvolvimento back end com as linguagens Python e framework
                Django para construção de APIs REST e desenvolvimento web
                (HTML,CSS, Java Script). Aptidão para trabalhar com bancos de
                dados relacionais MySQL. Habilidade para trabalhar com
                servidores Windows, Linux e containers Docker para deploy de
                aplicação e simulação de ambientes. Estou estudando motivado por
                desafios e aprender tecnologias novas, atualmente aprimorando o
                meu conhecimento em desenvolvimento frontend com ReactJS.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="section-title">Skills</h1>
            <div id="skills-section" className="skill-list">
              <div className="skill-col">
                <h3 className="skill-level">Intermediário</h3>
                <p className="skill-title">Python</p>
                <p className="skill-title">Django</p>
                <p className="skill-title">JavaScript</p>
                <p className="skill-title">RESTFull API</p>
                <p className="skill-title">HTML5</p>
                <p className="skill-title">CSS3</p>
                <p className="skill-title">MySQL</p>
                <p className="skill-title">Docker</p>
                <p className="skill-title">Git</p>
                <p className="skill-title">Heroku</p>
                <p className="skill-title">Linux</p>
              </div>
              <hr className="div-line" />
              <div className="skill-col">
                <h3 className="skill-level">Básico</h3>
                <p className="skill-title">ReactJS</p>
                <p className="skill-title">Web Scraping</p>
                <p className="skill-title">Flutter</p>
                <p className="skill-title">TypeScript</p>
                <p className="skill-title">MongoDB</p>
                <p className="skill-title">Windows Server</p>
                <p className="skill-title">AWS EC2</p>
                <p className="skill-title">AWS Lambda</p>
                <p className="skill-title">S3</p>
                <p className="skill-title">Elastic Beanstack</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SobrePage;
