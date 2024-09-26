import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getClient, PostAuthService } from "../service/Clienti.service";

const ModificaCliente = () => {
  const { id } = useParams();

  const [cliente, setClienti] = useState({
    username: "",
    nome: "",
    cognome: "",
    email: "",
    password: "",
    partitaIva: "",
    dataInserimento: "",
    dataUltimoContatto: "",
    fatturatoAnnuale: "",
    pec: "",
    telefono: "",
    emailDiContatto: "",
    telefonoDiContatto: "",
    logoAziendale: "",
    tipoClienti: "",
    sedeLegale: "",
    sedeOperativa: "",
  });

  const handlePopularclienti = async () => {
    const clienteData = await getClient("http://localhost:3001/clienti/" + id);
    setClienti(clienteData);
    console.log(clienteData);
  };

  useEffect(() => {
    handlePopularclienti();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClienti((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await PostAuthService(
        "http://localhost:3001/clienti/me",
        cliente
      );
      console.log("Dati del cliente aggiornati:", data);
    } catch (error) {
      console.error("Errore durante l'aggiornamento del cliente:", error);
    }
  };

  return (
    <Container fluid className="my-5">
      <Form onSubmit={handleSubmit} className="form_modifica_cliente py-5">
        <h2 className="mb-4 text-center">Modifica Cliente</h2>

        {/* Nome */}
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={cliente.nome || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Cognome */}
        <Form.Group className="mb-3">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            type="text"
            name="cognome"
            value={cliente.cognome || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={cliente.email || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Telefono */}
        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={cliente.telefono || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Username */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={cliente.username || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Partita IVA */}
        <Form.Group className="mb-3">
          <Form.Label>Partita IVA</Form.Label>
          <Form.Control
            type="text"
            name="partitaIva"
            value={cliente.partitaIva || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Data Inserimento */}
        <Form.Group className="mb-3">
          <Form.Label>Data Inserimento</Form.Label>
          <Form.Control
            type="date"
            name="dataInserimento"
            value={cliente.dataInserimento || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Data Ultimo Contatto */}
        <Form.Group className="mb-3">
          <Form.Label>Data Ultimo Contatto</Form.Label>
          <Form.Control
            type="date"
            name="dataUltimoContatto"
            value={cliente.dataUltimoContatto || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Fatturato Annuale */}
        <Form.Group className="mb-3">
          <Form.Label>Fatturato Annuale</Form.Label>
          <Form.Control
            type="text"
            name="fatturatoAnnuale"
            value={cliente.fatturatoAnnuale || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* PEC */}
        <Form.Group className="mb-3">
          <Form.Label>PEC</Form.Label>
          <Form.Control
            type="text"
            name="pec"
            value={cliente.pec || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Email di Contatto */}
        <Form.Group className="mb-3">
          <Form.Label>Email di Contatto</Form.Label>
          <Form.Control
            type="email"
            name="emailDiContatto"
            value={cliente.emailDiContatto || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Telefono di Contatto */}
        <Form.Group className="mb-3">
          <Form.Label>Telefono di Contatto</Form.Label>
          <Form.Control
            type="text"
            name="telefonoDiContatto"
            value={cliente.telefonoDiContatto || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Logo Aziendale */}
        <Form.Group className="mb-3">
          <Form.Label>Logo Aziendale</Form.Label>
          <Form.Control
            type="text"
            name="logoAziendale"
            value={cliente.logoAziendale || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Tipo Clienti */}
        <Form.Group className="mb-3">
          <Form.Label>Tipo Clienti</Form.Label>
          <Form.Control
            type="text"
            name="tipoClienti"
            value={cliente.tipoClienti || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Sede Legale ID */}
        <Form.Group className="mb-3">
          <Form.Label>Sede Legale ID</Form.Label>
          <Form.Control
            type="text"
            name="sedeLegaleId"
            value={cliente.sedeLegale?.id || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Sede Operativa ID */}
        <Form.Group className="mb-3">
          <Form.Label>Sede Operativa ID</Form.Label>
          <Form.Control
            type="text"
            name="sedeOperativaId"
            value={cliente.sedeOperativa?.id || ""}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={cliente.password || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Aggiorna Cliente
        </Button>
      </Form>
    </Container>
  );
};

export default ModificaCliente;
