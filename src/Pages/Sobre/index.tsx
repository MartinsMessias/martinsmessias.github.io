import React from "react";
import Header from "../../Components/Header";

const experiences = [
  {
    company: "Yandeh",
    role: "Software Developer",
    period: "mar/2024 - atual",
    description:
      "Atuação backend na plataforma Phigital com Python, Node.js e AWS, focando em novas features, estabilidade e melhorias de logística/comercial.",
  },
  {
    company: "Vixting",
    role: "Desenvolvedor Full Stack",
    period: "out/2023 - mar/2024",
    description:
      "Desenvolvimento com Node.js e ReactJS, usando Lambda, SQS, MySQL, MongoDB, S3 e Serverless Framework em entregas de alto volume.",
  },
  {
    company: "Bnex + SQUADS",
    role: "Desenvolvedor Full Stack / Backend",
    period: "set/2021 - set/2023",
    description:
      "Sustentação e evolução de CRM varejista com Python, Django, PostgreSQL, MongoDB, Redis, ETL e integrações REST/SOAP em ambiente AWS.",
  },
  {
    company: "ik tech + BPA + RBPREV",
    role: "Analista de Sistemas / RPA / Estágio",
    period: "jan/2019 - set/2021",
    description:
      "Base sólida em desenvolvimento web, scripts, suporte N1 e administração Linux/Windows com foco em operação e melhoria contínua.",
  },
];

const SobrePage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div id="about-section" className="glass-card hero-card">
              <div className="hero-content">
                <span className="eyebrow">Desenvolvedor Backend | Python | Node.js | AWS</span>
                <h1 className="section-title">Messias Martins</h1>
                <h3 className="title">São José - SC, Brasil</h3>
                <p className="description-about">
                  Sou Bacharel em Sistemas de Informação, com foco em desenvolvimento backend e
                  construção de APIs robustas em ambientes cloud-native. Minha prática inclui integrações
                  REST e SOAP, design orientado à escalabilidade, qualidade, performance e segurança.
                  Atuo com PostgreSQL e MongoDB, e com serviços AWS (S3, EC2, RDS, Lambda). Também
                  trabalho com Docker, Linux e pipelines CI/CD para deploy automatizado.
                </p>
                <p className="description-about">
                  Tenho experiência com LLMs e integrações com APIs de IA para adicionar capacidades
                  inteligentes em produtos quando necessário. Hoje meu maior impacto está em backend com
                  Node.js e Python, contribuindo com autonomia técnica e colaboração efetiva entre times.
                </p>
              </div>
              <img
                src="https://github.com/MartinsMessias.png"
                alt="Foto de perfil de Messias Martins"
                className="image"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-title section-spacing">Principais competências</h2>
            <div id="skills-section" className="skill-list">
              <div className="skill-col glass-card">
                <h3 className="skill-level">Core Backend</h3>
                <p className="skill-title">Python / Node.js</p>
                <p className="skill-title">APIs REST e integrações SOAP</p>
                <p className="skill-title">PostgreSQL / MongoDB / MySQL</p>
                <p className="skill-title">Arquitetura e integração de software</p>
                <p className="skill-title">Testes, segurança e performance</p>
              </div>
              <div className="skill-col glass-card">
                <h3 className="skill-level">Cloud, DevOps e IA</h3>
                <p className="skill-title">AWS (S3, EC2, RDS, Lambda)</p>
                <p className="skill-title">Docker e Linux</p>
                <p className="skill-title">CI/CD e deploy automatizado</p>
                <p className="skill-title">LLMs e integração com APIs de IA</p>
                <p className="skill-title">ReactJS (suporte frontend)</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="section-title section-spacing">Experiência profissional</h2>
            <div className="timeline-list">
              {experiences.map((experience) => (
                <article key={experience.company} className="timeline-item glass-card">
                  <p className="timeline-period">{experience.period}</p>
                  <h3 className="timeline-title">{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                  <p className="timeline-description">{experience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SobrePage;
