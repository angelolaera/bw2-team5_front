import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Form_Registrazione = () => {
  const [formRegister, setFormRegister] = useState({
    username: "",
    nome: "",
    cognome: "",
    email: "",
    password: "",
    piva: "",
    dataInserimento: "",
    dataUltimoContatto: "",
    fatturatoAnnuale: "",
    pec: "",
    telefono: "",
    emailContatto: "",
    telefonoContatto: "",
    logoAziendale: "",
    tipoClienti: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formRegister);
  };

  return (
    <Container fluid className="my-5">
      <Form className="form_registrazione" onSubmit={handleSubmit}>
        <h2 className="p-3 mb-2">REGISTRAZIONE</h2>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={formRegister.username} onChange={handleChange} required placeholder="Inserisci Username" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="nome" value={formRegister.nome} onChange={handleChange} required placeholder="Inserisci Nome" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Cognome</Form.Label>
          <Form.Control type="text" name="cognome" value={formRegister.cognome} onChange={handleChange} required placeholder="Inserisci Cognome" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formRegister.email} onChange={handleChange} required placeholder="Inserisci email" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formRegister.password} onChange={handleChange} required placeholder="Inserisci Password" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>P.IVA</Form.Label>
          <Form.Control type="text" name="piva" value={formRegister.piva} onChange={handleChange} required placeholder="Inserisci P.IVA" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Data Inserimento</Form.Label>
          <Form.Control type="text" name="dataInserimento" value={formRegister.dataInserimento} onChange={handleChange} required placeholder="YYYY-MM-DD" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Data Ultimo Contatto</Form.Label>
          <Form.Control
            type="text"
            name="dataUltimoContatto"
            value={formRegister.dataUltimoContatto}
            onChange={handleChange}
            required
            placeholder="YYYY-MM-DD"
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Fatturato Annuale </Form.Label>
          <Form.Control
            type="text"
            name="fatturatoAnnuale"
            value={formRegister.fatturatoAnnuale}
            onChange={handleChange}
            required
            placeholder="Inserisci fatturato annuale"
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>P.E.C.</Form.Label>
          <Form.Control type="text" name="pec" value={formRegister.pec} onChange={handleChange} required placeholder="Inserisci pec" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" name="telefono" value={formRegister.telefono} onChange={handleChange} required placeholder="Inserisci telefono" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Email di Contatto</Form.Label>
          <Form.Control type="email" name="emailContatto" value={formRegister.emailContatto} onChange={handleChange} required placeholder="Inserisci email" />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Telefono di Contatto</Form.Label>
          <Form.Control
            type="text"
            name="telefonoContatto"
            value={formRegister.telefonoContatto}
            onChange={handleChange}
            required
            placeholder="Inserisci telefono di contatto"
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Logo Aziendale</Form.Label>
          <Form.Control
            type="text"
            name="logoAziendale"
            value={formRegister.logoAziendale}
            onChange={handleChange}
            required
            placeholder="Inserisci logo aziendale"
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Tipo Clienti</Form.Label>
          <Form.Control type="text" name="tipoClienti" value={formRegister.tipoClienti} onChange={handleChange} required placeholder="Inserisci tipo cliente" />
        </Form.Group>
        <Button variant="secondary" type="submit" className="mb-5">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Form_Registrazione;
