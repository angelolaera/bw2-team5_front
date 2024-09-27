import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClient } from "../service/Clienti.service";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";

const ViewFatture = () => {
  const { id } = useParams();
  const [fattura, setFattura] = useState({});

  const handlePopularFattura = async () => {
    const clienteData = await getClient(
      "http://localhost:3001/fatture/fatt/" + id
    );
    setFattura(clienteData);
    console.log(clienteData);
  };

  useEffect(() => {
    handlePopularFattura();
  }, [id]);

  return (
    <Card style={{ width: "100%", margin: "20px auto" }}>
      <Card.Body>
        <Card.Title>Fattura #{fattura?.numero}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          Stato:{" "}
          {fattura?.statoFattura
            ? fattura.statoFattura.charAt(0).toUpperCase() +
              fattura.statoFattura.slice(1)
            : "N/A"}
        </Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Data Fattura:</strong> {fattura?.dataFattura || "N/A"}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Importo:</strong> €{fattura?.importo || "N/A"}
          </ListGroup.Item>
        </ListGroup>

        <Card.Subtitle className="mt-4">Dettagli Cliente</Card.Subtitle>
        <Row className="mt-3 mb-3">
          <Col md={3}>
            <Image
              src={fattura?.cliente?.avatar || "default-avatar.jpg"} // default avatar fallback
              roundedCircle
              width="100"
              height="100"
            />
          </Col>
          <Col md={9}>
            <Card.Title>
              {fattura?.cliente?.nome} {fattura?.cliente?.cognome}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {fattura?.cliente?.username || "N/A"}
            </Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Email:</strong> {fattura?.cliente?.email || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Partita IVA:</strong>{" "}
                {fattura?.cliente?.partitaIva || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Telefono:</strong> {fattura?.cliente?.telefono || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email di Contatto:</strong>{" "}
                {fattura?.cliente?.emailDiContatto || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Telefono di Contatto:</strong>{" "}
                {fattura?.cliente?.telefonoDiContatto || "N/A"}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Card.Subtitle className="mt-3 mb-2 text-muted">
          Sede Legale
        </Card.Subtitle>
        {fattura?.cliente?.sedeLegale ? (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Via:</strong> {fattura?.cliente?.sedeLegale?.via || "N/A"}
              , {fattura?.cliente?.sedeLegale?.civico || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Località:</strong>{" "}
              {fattura?.cliente?.sedeLegale?.localita || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>CAP:</strong> {fattura?.cliente?.sedeLegale?.cap || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Comune:</strong>{" "}
              {fattura?.cliente?.sedeLegale?.comune?.nome || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Provincia:</strong>{" "}
              {fattura?.cliente?.sedeLegale?.comune?.provincia?.nome || "N/A"} (
              {fattura?.cliente?.sedeLegale?.comune?.provincia?.sigla || "N/A"})
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Regione:</strong>{" "}
              {fattura?.cliente?.sedeLegale?.comune?.provincia?.regione ||
                "N/A"}
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
        {fattura?.cliente?.sedeOperativa ? (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Via:</strong>{" "}
              {fattura?.cliente?.sedeOperativa?.via || "N/A"},{" "}
              {fattura?.cliente?.sedeOperativa?.civico || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Località:</strong>{" "}
              {fattura?.cliente?.sedeOperativa?.localita || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>CAP:</strong>{" "}
              {fattura?.cliente?.sedeOperativa?.cap || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Comune:</strong>{" "}
              {fattura?.cliente?.sedeOperativa?.comune?.nome || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Provincia:</strong>{" "}
              {fattura?.cliente?.sedeOperativa?.comune?.provincia?.nome ||
                "N/A"}{" "}
              (
              {fattura?.cliente?.sedeOperativa?.comune?.provincia?.sigla ||
                "N/A"}
              )
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Regione:</strong>{" "}
              {fattura?.cliente?.sedeOperativa?.comune?.provincia?.regione ||
                "N/A"}
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Sede Operativa:</strong> null
            </ListGroup.Item>
          </ListGroup>
        )}
      </Card.Body>
      <Card.Footer className="text-muted">
        <small>
          <strong>Data Inserimento fattura Cliente :</strong>{" "}
          {fattura?.cliente?.dataInserimento || "N/A"}
        </small>
        <br />
        <small>
          <strong>Ultimo Contatto fattura Cliente :</strong>{" "}
          {fattura?.cliente?.dataUltimoContatto || "N/A"}
        </small>
      </Card.Footer>
    </Card>
  );
};
export default ViewFatture;
