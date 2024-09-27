import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="my-4">Cosa vuoi fare oggi?</h1>
        <Row className="justify-content-center">
          <Col md={4} className="mb-3">
            <Link to="/clienti">
              <Button variant="secondary" className="w-100">
                Lista Clienti
              </Button>
            </Link>
          </Col>
          <Col md={4} className="mb-3">
            <Link to="/registrazione">
              <Button variant="secondary" className="w-100">
                Aggiungi Cliente
              </Button>
            </Link>
          </Col>
          <Col md={4} className="mb-3">
            <Link to="/fatture">
              <Button variant="secondary" className="w-100">
                Lista Fatture
              </Button>
            </Link>
          </Col>
          <Col md={4} className="mb-3">
            <Link to="/comuni">
              <Button variant="secondary" className="w-100">
                Lista Comuni
              </Button>
            </Link>
          </Col>
          <Col md={4} className="mb-3">
            <Link to="/province">
              <Button variant="secondary" className="w-100">
                Lista Province
              </Button>
            </Link>
          </Col>
          <Col md={4} className="mb-3">
            <Link to="/indirizzi">
              <Button variant="secondary" className="w-100">
                Lista Indirizzi
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
