import "./App.scss";
import Form_Registrazione from "./Components/Form_Registrazione";
import Form_Login from "./Components/Form_Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clienti from "./Components/Clienti";
import ModificaCliente from "./Components/ModificaCliente";
import Indirizzi from "./Components/Indirizzi";
import ModificaIndirizzi from "./Components/ModificaIndirizzi";
import ViewIndirizzi from "./Components/ViewIndirizzi";
import ViewClienti from "./Components/ViewClienti";
import Fatture from "./Components/Fatture";
import Menu from "./Components/Menu";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/menu">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Form_Login />} />
        <Route path="/registrazione" element={<Form_Registrazione />} />
        <Route path="/clienti" element={<Clienti />} />
        <Route path="/modificaCliente/:id" element={<ModificaCliente />} />
        <Route path="/indirizzi" element={<Indirizzi />} />
        <Route path="/modificaIndirizzi/:id" element={<ModificaIndirizzi />} />
        <Route path="/viewIndirizzo/:id" element={<ViewIndirizzi />} />
        <Route path="/viewCliente/:id" element={<ViewClienti />} />
        <Route path="/fatture" element={<Fatture />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
