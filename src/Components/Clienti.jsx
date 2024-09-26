import { Button, Container, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Clienti = () => {
  const clienti = [
    {
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
    },
    {
      id: 2,
      nome: "Luigi",
      cognome: "Verdi",
      email: "luigi.verdi@example.com",
      telefono: "0987654321",
      tipoUtente: "SA",
      Username: "Luigi8",
      Avatar: "Http:2000",
      Ruolo: "User",
      partitaIva: "10987654321",
      dataInserimento: "2023-01-15",
      dataUltimoContatto: "2023-02-15",
      fatturatoAnnuale: "200000",
      pec: "luigi.verdi@pec.example.com",
      emailDiContatto: "contatto.luigi@example.com",
      telefonoDiContatto: "1234567890",
      logoAziendale: "http://example.com/logo.png",
      tipoClienti: "B2C",
      sedeLegale: 3,
      sedeOperativa: 4,
    },
    {
      id: 3,
      nome: "Giulia",
      cognome: "Bianchi",
      email: "giulia.bianchi@example.com",
      telefono: "1122334455",
      tipoUtente: "SA",
      Username: "Giulia99",
      Avatar: "Http:2000",
      Ruolo: "User",
      partitaIva: "11223344556",
      dataInserimento: "2023-01-20",
      dataUltimoContatto: "2023-02-20",
      fatturatoAnnuale: "150000",
      pec: "giulia.bianchi@pec.example.com",
      emailDiContatto: "contatto.giulia@example.com",
      telefonoDiContatto: "2233445566",
      logoAziendale: "http://example.com/logo.png",
      tipoClienti: "B2B",
      sedeLegale: 5,
      sedeOperativa: 6,
    },
  ];
  const navigate = useNavigate();
  const handleDelete = (clienteId) => {
    //elimina Clienti tramite id
    console.log("Elimina cliente con ID:", clienteId);
  };

  return (
    <Container >
      <h2 className="mb-4 text-center position-absolute top-0 my-5">Lista Clienti</h2>
      <div className="table-responsive div-table_clienti position-absolute   start-0 my-3">
        <Table striped bordered hover className="table_clienti mb-5 pb-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo Utente</th>
              <th>Username</th>
              <th>Nome</th>
              <th>Cognome</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Avatar</th>
              <th>Ruolo</th>
              <th>Partita IVA</th>
              <th>Data Inserimento</th>
              <th>Data Ultimo Contatto</th>
              <th>Fatturato Annuale</th>
              <th>PEC</th>
              <th>Email di Contatto</th>
              <th>Telefono di Contatto</th>
              <th>Logo Aziendale</th>
              <th>Tipo Clienti</th>
              <th>Sede Legale</th>
              <th>Sede Operativa</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {clienti.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.tipoUtente}</td>
                <td>{cliente.Username}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cognome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.Avatar}</td>
                <td>{cliente.Ruolo}</td>
                <td>{cliente.partitaIva}</td>
                <td>{cliente.dataInserimento}</td>
                <td>{cliente.dataUltimoContatto}</td>
                <td>{cliente.fatturatoAnnuale}</td>
                <td>{cliente.pec}</td>
                <td>{cliente.emailDiContatto}</td>
                <td>{cliente.telefonoDiContatto}</td>
                <td>{cliente.logoAziendale}</td>
                <td>{cliente.tipoClienti}</td>
                <td>{cliente.sedeLegale}</td>
                <td>{cliente.sedeOperativa}</td>
                <td>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    onClick={() => navigate("/modificaCliente/" + cliente.id)}
                  >
                    <FaEdit />
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(cliente.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default Clienti;
