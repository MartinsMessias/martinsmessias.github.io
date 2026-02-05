import React from "react";
import { HashRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import SobrePage from "./Pages/Sobre";
import Portifolio from "./Pages/Portifolio";
import ContatosPage from "./Pages/Contatos";
import Footer from "./Components/Footer";

function Routes() {
  return (
    <HashRouter>
      <RouterRoutes>
        <Route path="/" element={<SobrePage />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/contatos" element={<ContatosPage />} />
      </RouterRoutes>
      <Footer />
    </HashRouter>
  );
}

export default Routes;
