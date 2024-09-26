import { Container, Table } from "react-bootstrap";

const Clienti = () => {
    const clients = [
    { id: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@example.com', telefono: '1234567890' },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@example.com', telefono: '0987654321' },
    { id: 3, nome: 'Giulia', cognome: 'Bianchi', email: 'giulia.bianchi@example.com', telefono: '1122334455' },
   
  ];

  return (
    <Container fluid className="my-5">
      <h2 className="mb-4 text-center ">Lista Clienti</h2>
      <Table striped bordered hover className="table_clienti">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.nome}</td>
              <td>{client.cognome}</td>
              <td>{client.email}</td>
              <td>{client.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );

}
export default Clienti;