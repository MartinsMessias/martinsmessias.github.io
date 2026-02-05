import React from "react";
import Header from "../../Components/Header";

const contactItems = [
  { label: "Email", value: "messiasads2017@gmail.com", link: "mailto:messiasads2017@gmail.com" },
  { label: "WhatsApp", value: "+55 48 99828-5411", link: "https://api.whatsapp.com/send?phone=5548998285411" },
  { label: "LinkedIn", value: "/in/messias-martins", link: "https://www.linkedin.com/in/messias-martins/?locale=en_US" },
  { label: "GitHub", value: "github.com/MartinsMessias", link: "https://github.com/MartinsMessias" },
];

const ContatosPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <h1 className="section-title">Contato</h1>
            <p className="section-description">Disponível para oportunidades backend, freelas e projetos desafiadores.</p>

            <div className="contact-highlight glass-card">
              <h2>Messias Martins</h2>
              <p>Desenvolvedor Backend • Python • Node.js • AWS</p>
              <p>São José - SC, Brasil</p>
            </div>

            <div id="contacts-section">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  className="btn"
                  target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContatosPage;
