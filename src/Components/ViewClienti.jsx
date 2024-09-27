import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClient } from "../service/Clienti.service";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
const ViewClienti = () => {
  const { id } = useParams();
  const [cliente, setClienti] = useState({});

  const handlePopularclienti = async () => {
    const clienteData = await getClient("http://localhost:3001/clienti/" + id);
    setClienti(clienteData);
    console.log(clienteData);
  };

  useEffect(() => {
    handlePopularclienti();
  }, [id]);

  return (
    <Card style={{ width: "100%", margin: "20px auto" ,padding:"20px 70px"}}>
      <Card.Body>
        <Row className="mb-3">
          <Col md={3}>
            <Image
              src={cliente?.avatar}
              roundedCircle
              width="100"
              height="100"
            />
          </Col>
          <Col md={9}>
            <Card.Title className="ps-3">
              {cliente?.nome} {cliente?.cognome}
            </Card.Title>
            <Card.Subtitle className="mb-4 text-muted ps-3">
              {cliente?.username}
            </Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Email:</strong> {cliente?.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Partita IVA:</strong> {cliente?.partitaIva}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Fatturato Annuale:</strong> €{cliente?.fatturatoAnnuale}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>PEC:</strong> {cliente?.pec}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Telefono:</strong> {cliente?.telefono}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email di Contatto:</strong> {cliente?.emailDiContatto}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Telefono di Contatto:</strong>{" "}
                {cliente?.telefonoDiContatto}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Logo Aziendale:</strong> {cliente?.logoAziendale}
              </ListGroup.Item>
              <ListGroup.Item className="mb-3">
                <strong>Tipo Cliente:</strong> {cliente?.tipoClienti}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Card.Subtitle className="mt-3 mb-2 text-muted">
          Sede Legale
        </Card.Subtitle>
        {cliente.sedeLegale ? (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Via:</strong> {cliente?.sedeLegale?.via},{" "}
              {cliente?.sedeLegale?.civico}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Località:</strong> {cliente?.sedeLegale?.localita}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>CAP:</strong> {cliente?.sedeLegale?.cap}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Comune:</strong> {cliente?.sedeLegale?.comune?.nome}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Provincia:</strong>{" "}
              {cliente?.sedeLegale?.comune?.provincia?.nome} (
              {cliente?.sedeLegale?.comune?.provincia?.sigla})
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Regione:</strong>{" "}
              {cliente?.sedeLegale?.comune?.provincia?.regione}
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Sede Legale:</strong> null
            </ListGroup.Item>
          </ListGroup>
        )}

        <Card.Subtitle className="mt-3 mb-2 text-muted">
          Sede Operativa
        </Card.Subtitle>
        {cliente.sedeOperativa ? (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Via:</strong> {cliente?.sedeOperativa?.via},{" "}
              {cliente?.sedeOperativa?.civico}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Località:</strong> {cliente?.sedeOperativa?.localita}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>CAP:</strong> {cliente?.sedeOperativa?.cap}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Comune:</strong> {cliente?.sedeOperativa?.comune?.nome}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Provincia:</strong>{" "}
              {cliente?.sedeOperativa?.comune?.provincia?.nome} (
              {cliente?.sedeOperativa?.comune?.provincia?.sigla})
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Regione:</strong>{" "}
              {cliente?.sedeOperativa?.comune?.provincia?.regione}
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Sede Operativa:</strong> null
            </ListGroup.Item>
          </ListGroup>
        )}

        <Card.Footer className="text-muted mt-3">
          <small >
            <strong>Data Inserimento:</strong> {cliente?.dataInserimento}
          </small>
          <br />
          <small>
            <strong>Ultimo Contatto:</strong> {cliente?.dataUltimoContatto}
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
export default ViewClienti;
