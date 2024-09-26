import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Form_Registrazione() {
  return (
    <Form className="form_registrazione">
      <h2 className="p-3 mb-2">REGISTRAZIONE</h2>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Username" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Nome" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Cognome</Form.Label>
        <Form.Control type="text" placeholder="Inserisci Cognome" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Inserisci email" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Inserisci Password" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>P.IVA</Form.Label>
        <Form.Control type="text" placeholder="Inserisci P.IVA" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Data Inserimento</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Data Ultimo Contatto</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Fatturato Annuale</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>P.E.C.</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Email di Contatto</Form.Label>
        <Form.Control type="email" placeholder="Inserisci email" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Telefono di Contatto</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Logo Aziendale</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Tipo Clienti</Form.Label>
        <Form.Control type="text" placeholder="YYYY/MM/DD" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Form_Registrazione;
