import React from "react";
import Header from "../../Components/Header";

const highlights = [
  "Arquitetura de APIs REST/SOAP",
  "Node.js, Python, PostgreSQL e MongoDB",
  "AWS (S3, EC2, RDS, Lambda)",
  "Docker, Linux e CI/CD",
  "Integrações com LLMs e produtos com IA",
];

const experiences = [
  {
    company: "Yandeh",
    role: "Software Developer",
    period: "mar/2024 - atual",
    description:
      "Desenvolvimento backend na plataforma Phigital com Python, Node.js e AWS, evoluindo features e estabilidade operacional.",
  },
  {
    company: "Vixting",
    role: "Desenvolvedor Full Stack",
    period: "out/2023 - mar/2024",
    description:
      "Atuação com Node.js e React, Serverless, Lambda, SQS, S3, MySQL e MongoDB em entregas de alto volume.",
  },
  {
    company: "Bnex / SQUADS",
    role: "Backend / Full Stack",
    period: "set/2021 - set/2023",
    description:
      "Sustentação e evolução de CRM com Python, Django, PostgreSQL, MongoDB, Redis, ETL e integrações REST/SOAP em AWS.",
  },
];

const SobrePage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="hero-layout glass-card">
              <div className="hero-content">
                <span className="eyebrow">Backend Engineer • Python • Node.js • AWS</span>
                <h1 className="section-title">Messias Martins</h1>
                <p className="description-about">
                  Desenvolvedor backend com foco em APIs, integrações e serviços escaláveis em ambiente cloud-native.
                </p>
                <div className="hero-actions">
                  <a className="btn-primary" href="#/portifolio">
                    Ver projetos
                  </a>
                  <a className="btn-secondary" href="#/contatos">
                    Contato
                  </a>
                </div>
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
          <div className="container section-block">
            <h2 className="section-title">Competências principais</h2>
            <div className="skill-list">
              <div className="skill-col glass-card">
                <h3 className="skill-level">Stack e arquitetura</h3>
                {highlights.map((item) => (
                  <p key={item} className="skill-title">
                    {item}
                  </p>
                ))}
              </div>
              <div className="skill-col glass-card">
                <h3 className="skill-level">Idioma e certificações</h3>
                <p className="skill-title">Inglês (Professional Working)</p>
                <p className="skill-title">Scrum Foundation Certificate</p>
                <p className="skill-title">Lifelong Learning</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container section-block">
            <h2 className="section-title">Experiência recente</h2>
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
