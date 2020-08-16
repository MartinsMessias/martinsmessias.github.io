import React from "react";

//Personalização
import "./styles.css";

//Imagens
import pythonImg from "../../assets/img/python.png";
import awsImg from "../../assets/img/aws.png";
import bootstrapImg from "../../assets/img/bootstrap.png";
import cssImg from "../../assets/img/css.png";
import dartImg from "../../assets/img/dart.png";
import djangoImg from "../../assets/img/django.png";
import dockerImg from "../../assets/img/docker.png";
import flutterImg from "../../assets/img/flutter.png";
import gitImg from "../../assets/img/git.png";
import htmllmg from "../../assets/img/html.png";
import jsImg from "../../assets/img/js.png";
import jsonImg from "../../assets/img/json.png";
import linuxImg from "../../assets/img/linux.png";
import mongodbImg from "../../assets/img/mongodb.png";
import mysqlImg from "../../assets/img/mysql.png";
import reactImg from "../../assets/img/react.png";
import restImg from "../../assets/img/rest.png";
import sqlImg from "../../assets/img/sql.png";

const SobrePage = () => {
  return (
    <>
      <div className="row">
        <div className="container container-sobre">
          <img
            src="https://github.com/MartinsMessias.png"
            alt="Foto de perfil"
            className="image"
          />
          <h3 className="title">Messias de Souza Martins</h3>
          <p className="description-about">
            Graduando em Sistemas de Informação, experiêcia com desenvolvimento
            back end com as linguagens Python e framework Django para construção
            de APIs REST e desenvolvimento web (HTML,CSS, Java Script). Aptidão
            para trabalhar com bancos de dados relacionais MySQL. Habilidade
            para trabalhar com servidores Windows, Linux e containers Docker
            para deploy de aplicação e simulação de ambientes. Estou estudando
            motivado por desafios e aprender tecnologias novas, atualmente
            aprimorando o meu conhecimento em desenvolvimento frontend com
            ReactJS.
          </p>
        </div>
      </div>
      <div className="slider">
        <section className="image-list slide-track">
          <div className="slide">
            <img src={djangoImg} alt="Django" />
          </div>
          <div className="slide">
            <img src={pythonImg} alt="Python" />
          </div>
          <div className="slide">
            <img src={jsImg} alt="Javascript" />
          </div>
          <div className="slide">
            <img src={htmllmg} alt="HTML" />
          </div>
          <div className="slide">
            <img src={cssImg} alt="CSS" />
          </div>
          <div className="slide">
            <img src={awsImg} alt="AWS" />
          </div>
          <div className="slide">
            <img src={bootstrapImg} alt="Bootstrap" />
          </div>
          <div className="slide">
            <img src={dartImg} alt="Dart" />
          </div>
          <div className="slide">
            <img src={dockerImg} alt="Docker" />
          </div>
          <div className="slide">
            <img src={flutterImg} alt="Flutter" />
          </div>
          <div className="slide">
            <img src={gitImg} alt="Git" />
          </div>
          <div className="slide">
            <img src={jsonImg} alt="json" />
          </div>
          <div className="slide">
            <img src={linuxImg} alt="Linux" />
          </div>
          <div className="slide">
            <img src={mongodbImg} alt="mongodb" />
          </div>
          <div className="slide">
            <img src={mysqlImg} alt="MySql" />
          </div>
          <div className="slide">
            <img src={reactImg} alt="React" />
          </div>
          <div className="slide">
            <img src={restImg} alt="REST" />
          </div>
          <div className="slide">
            <img src={sqlImg} alt="SQL" />
          </div>
        </section>
      </div>
    </>
  );
};

export default SobrePage;
