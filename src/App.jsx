import "./App.scss";
import Form_Registrazione from "./Components/Form_Registrazione";
import Form_Login from "./Components/Form_Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clienti from "./Components/Clienti";
import ModificaCliente from "./Components/ModificaCliente";

import Fatture from "./Components/Fatture";
import Menu from "./Components/Menu";

import Indirizzi from "./Components/Indirizzi";
import ModificaIndirizzi from "./Components/ModificaIndirizzi";
import ViewIndirizzi from "./Components/ViewIndirizzi";
import ViewClienti from "./Components/ViewClienti";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form_Login />} />
        <Route path="/registrazione" element={<Form_Registrazione />} />
        <Route path="/clienti" element={<Clienti />} />
        <Route path="/modifica" element={<ModificaCliente />} />
        <Route path="/fatture" element={<Fatture />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/clienti" element={<Clienti/>} />
        <Route path="/modificaCliente/:id" element={<ModificaCliente/>} />
        <Route path="/indirizzi" element={<Indirizzi/>} />
        <Route path="/modificaIndirizzo/:id" element={<ModificaIndirizzi/>} />
        <Route path="/viewIndirizzo/:id" element={<ViewIndirizzi/>} />
        <Route path="/viewCliente/:id" element={<ViewClienti/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
