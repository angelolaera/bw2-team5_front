import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getClient, PutClient } from "../service/Clienti.service";

const ModificaIndirizzi = () => {
  const { id } = useParams();
  

  const [indirizzi, setIndirizzi] = useState({
    cap: "",
    civico: "",
    localita: "",
    via: "",
    tipo: "",
    comuneId: "",
    clienteId: "",
  });

  const handlePopularIndirizzi = async () => {
    const indirizziData = await getClient(
      "http://localhost:3001/indirizzi/" + id
    );
    setIndirizzi(indirizziData);
    console.log(indirizziData);
  };

  useEffect(() => {
    handlePopularIndirizzi();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIndirizzi((prevIndirizzi) => ({
      ...prevIndirizzi,
      [name]: value,
    }));
  };
  const handleChangeId = (e) => {
    const { name, value } = e.target;
    setIndirizzi((prevIndirizzi) => ({
      ...prevIndirizzi,
      [name]: { id: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedIndirizzi = {
        ...indirizzi,
        comuneId: indirizzi.comune.id,
      };

      const data = await PutClient(
        "http://localhost:3001/indirizzi/" + id,
        updatedIndirizzi
      );
      console.log("Data:", data);
    } catch (error) {
      console.error("Errore durante l'aggiornamento del Indirizzi:", error);
    }
  };

  return (
    <Container fluid className="my-5">
      <Form onSubmit={handleSubmit} className="form_modifica_Indirizzi py-5">
        <h2 className="mb-4 text-center">Modifica Indirizzi</h2>
        <Form.Group className="mb-3">
          <Form.Label>Cap</Form.Label>
          <Form.Control
            type="text"
            name="cap"
            value={indirizzi?.cap || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Civico</Form.Label>
          <Form.Control
            type="text"
            name="civico"
            value={indirizzi?.civico || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Località</Form.Label>
          <Form.Control
            type="text"
            name="localita"
            value={indirizzi?.localita || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Via</Form.Label>
          <Form.Control
            type="text"
            name="via"
            value={indirizzi?.via || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipo indirizzo</Form.Label>
          <Form.Control
            type="text"
            name="tipoIndirizzo"
            value={indirizzi?.tipoIndirizzo || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Comune Id</Form.Label>
          <Form.Control
            type="text"
            name="comuneId"
            value={indirizzi?.comune?.id || ""}
            onChange={handleChangeId}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cliente Id</Form.Label>
          <Form.Control
            type="text"
            name="clienteId"
            value={indirizzi?.clienteId || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Aggiorna Indirizzi
        </Button>
      </Form>
    </Container>
  );
};

export default ModificaIndirizzi;
