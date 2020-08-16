import React from "react";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import SobrePage from "./Pages/Sobre";
import Portifolio from "./Pages/Portifolio";
import ContatosPage from "./Pages/Contatos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Routes() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact component={SobrePage} />
      <Route path="/portifolio/" component={Portifolio} />
      <Route path="/contatos/" component={ContatosPage} />
      <Footer />
    </HashRouter>
  );
}

export default Routes;
