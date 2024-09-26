import "./App.scss";
import Form_Registrazione from "./Components/Form_Registrazione";
import Form_Login from "./Components/Form_Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clienti from "./Components/Clienti";
import ModificaCliente from "./Components/ModificaCliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form_Login />} />
        <Route path="/registrazione" element={<Form_Registrazione />} />
        <Route path="/clienti" element={<Clienti/>} />
        <Route path="/modificaCliente/:id" element={<ModificaCliente/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
