import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { getClient, PutClient } from "../service/Clienti.service";

const ModificaFattura = () => {
  const { id } = useParams();

  const [fatture, setFatture] = useState({
    dataFattura: "",
    importo: "",
    numero: "",
    statoFattura: "",
    clienteID: "",
  });

  const handlePopularFatture = async () => {
    try {
      const fattureData = await getClient(
        `http://localhost:3001/fatture/fatt/${id}`
      );

      setFatture({
        
        dataFattura: fattureData.dataFattura,
        importo: fattureData.importo,
        numero: fattureData.numero,
        statoFattura: fattureData.statoFattura,
        clienteID: fattureData.cliente.id,
      });

      console.log(fattureData);
    } catch (error) {
      console.error("Errore durante il recupero della fattura:", error);
    }
  };

  useEffect(() => {
    handlePopularFatture();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFatture((prevFatture) => ({
      ...prevFatture,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFatture = { ...fatture };
      await PutClient(`http://localhost:3001/fatture/${id}`, updatedFatture);

      console.log("Updated fattura data:", updatedFatture);
    } catch (error) {
      console.error("Errore durante l'aggiornamento della fattura:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Modifica Fattura</h3>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formDataFattura">
            <Form.Label>Data Fattura</Form.Label>
            <Form.Control
              type="date"
              name="dataFattura"
              value={fatture.dataFattura}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formImporto">
            <Form.Label>Importo</Form.Label>
            <Form.Control
              type="number"
              name="importo"
              value={fatture.importo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formNumero">
            <Form.Label>Numero Fattura</Form.Label>
            <Form.Control
              type="text"
              name="numero"
              value={fatture.numero}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formStatoFattura">
            <Form.Label>Stato Fattura</Form.Label>
            <Form.Control
              as="select"
              name="statoFattura"
              value={fatture.statoFattura}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="cancelled">Cancelled</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formClienteID">
        <Form.Label>ID Cliente</Form.Label>
        <Form.Control
          type="text"
          name="clienteID"
          value={fatture.clienteID}
          disabled
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Salva Modifiche
      </Button>
    </Form>
  );
};

export default ModificaFattura;
