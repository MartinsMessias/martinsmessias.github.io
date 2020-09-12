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
            Em breve!
          </div>
        </section>
      </main>
    </>
  );
};

export default SobrePage;
