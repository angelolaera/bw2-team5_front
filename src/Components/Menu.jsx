import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="bg-light">
          <ListGroup>
            <ListGroup.Item action href="#/clienti">
              Gestione Cliente
            </ListGroup.Item>
            <ListGroup.Item action href="#/fatture">
              Gestione Fatture
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <h1>Pannello di Controllo Amministratore</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
