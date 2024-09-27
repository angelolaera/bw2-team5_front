import { Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Clienti from "./Clienti";
import Form_Registrazione from "./Form_Registrazione";

const Menu = () => {
  return (
    <Row className="d-flex w-100" style={{ margin: 0 }}>
      <Col xl={3} className="bg-light vh-100">
        <h1>EPIC ENERGIA</h1>
        <ListGroup className="mt-5">
          <ListGroup.Item action href="#/clienti">
            Registrazione Cliente
          </ListGroup.Item>
          <ListGroup.Item action href="#/fatture">
            Gestione Fatture
          </ListGroup.Item>
          <ListGroup.Item action href="#/clienti">
            Visualizza Clienti
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col xl={9} className="d-flex flex-column">
        <Clienti />
        <Form_Registrazione />
      </Col>
    </Row>
  );
};

export default Menu;
