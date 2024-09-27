import "./App.scss";
import Form_Registrazione from "./Components/Form_Registrazione";
import Form_Login from "./Components/Form_Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clienti from "./Components/Clienti";
import ModificaCliente from "./Components/ModificaCliente";
import Indirizzi from "./Components/Indirizzi";
import ModificaIndirizzi from "./Components/ModificaIndirizzi";
import ViewIndirizzi from "./Components/ViewIndirizzi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form_Login />} />
        <Route path="/registrazione" element={<Form_Registrazione />} />
        <Route path="/clienti" element={<Clienti/>} />
        <Route path="/modificaCliente/:id" element={<ModificaCliente/>} />
        <Route path="/indirizzi" element={<Indirizzi/>} />
        <Route path="/modificaIndirizzo/:id" element={<ModificaIndirizzi/>} />
        <Route path="/viewIndirizzo/:id" element={<ViewIndirizzi/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
