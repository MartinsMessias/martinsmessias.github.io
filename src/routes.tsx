import React from "react";
import { HashRouter, Route } from "react-router-dom";
import SobrePage from "./Pages/Sobre";
import Portifolio from "./Pages/Portifolio";
import ContatosPage from "./Pages/Contatos";
import Footer from "./Components/Footer";

function Routes() {
  return (
    <HashRouter>
      <Route path="/" exact component={SobrePage} />
      <Route path="/portifolio/" component={Portifolio} />
      <Route path="/contatos/" component={ContatosPage} />
      <Footer />
    </HashRouter>
  );
}

export default Routes;
