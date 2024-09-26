import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const ModificaCliente=()=>{
    const [formData, setFormData] = useState( {
      id: 1,
      nome: "Mario",
      cognome: "Rossi",
      email: "mario.rossi@example.com",
      telefono: "1234567890",
      tipoUtente: "SA",
      Username: "Mario86",
      Avatar: "Http:2000",
      Ruolo: "Admin",
      partitaIva: "12345678901",
      dataInserimento: "2023-01-01",
      dataUltimoContatto: "2023-02-01",
      fatturatoAnnuale: "100000",
      pec: "mario.rossi@pec.example.com",
      emailDiContatto: "contatto.mario@example.com",
      telefonoDiContatto: "0987654321",
      logoAziendale: "http://example.com/logo.png",
      tipoClienti: "B2B",
      sedeLegale: 1,
      sedeOperativa: 2,
    });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati del cliente aggiornati:", formData);
   
   
  };

  return (
    <Container fluid className="my-5">
      <Form onSubmit={handleSubmit} className="form_modifica_cliente py-5">
      <h2 className="mb-4 text-center">Modifica Cliente</h2>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" name="id" value={formData.id} readOnly />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cognome</Form.Label>
          <Form.Control type="text" name="cognome" value={formData.cognome} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipo Utente</Form.Label>
          <Form.Control type="text" name="tipoUtente" value={formData.tipoUtente} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="Username" value={formData.Username} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="text" name="Avatar" value={formData.Avatar} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ruolo</Form.Label>
          <Form.Control type="text" name="Ruolo" value={formData.Ruolo} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Partita IVA</Form.Label>
          <Form.Control type="text" name="partitaIva" value={formData.partitaIva} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data Inserimento</Form.Label>
          <Form.Control type="date" name="dataInserimento" value={formData.dataInserimento} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data Ultimo Contatto</Form.Label>
          <Form.Control type="date" name="dataUltimoContatto" value={formData.dataUltimoContatto} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fatturato Annuale</Form.Label>
          <Form.Control type="text" name="fatturatoAnnuale" value={formData.fatturatoAnnuale} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PEC</Form.Label>
          <Form.Control type="email" name="pec" value={formData.pec} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email di Contatto</Form.Label>
          <Form.Control type="email" name="emailDiContatto" value={formData.emailDiContatto} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefono di Contatto</Form.Label>
          <Form.Control type="text" name="telefonoDiContatto" value={formData.telefonoDiContatto} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Logo Aziendale</Form.Label>
          <Form.Control type="text" name="logoAziendale" value={formData.logoAziendale} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipo Clienti</Form.Label>
          <Form.Control type="text" name="tipoClienti" value={formData.tipoClienti} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sede Legale</Form.Label>
          <Form.Control type="text" name="sedeLegale" value={formData.sedeLegale} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sede Operativa</Form.Label>
          <Form.Control type="text" name="sedeOperativa" value={formData.sedeOperativa} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Aggiorna Cliente
        </Button>
      </Form>
    </Container>
  );
}
export default ModificaCliente