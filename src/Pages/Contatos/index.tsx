import React from "react";
import Header from "../../Components/Header";

const ContatosPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <h1 className="section-title">Contato</h1>
            <p className="section-description">Disponível para oportunidades backend, projetos e consultoria técnica.</p>

            <div className="contact-highlight glass-card">
              <h2>Messias Martins</h2>
              <p>Desenvolvedor | Python | Node.js | AWS | AI-Assisted Development</p>
              <p>São José - SC, Brasil</p>
            </div>

            <div id="contacts-section">
              <a
                href="mailto:messiasads2017@gmail.com"
                className="btn"
              >
                messiasads2017@gmail.com
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5548998285411"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +55 48 99828-5411
              </a>
              <a
                href="https://www.linkedin.com/in/messias-martins/?locale=en_US"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn (perfil atualizado)
              </a>
              <a
                href="https://github.com/MartinsMessias"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContatosPage;
