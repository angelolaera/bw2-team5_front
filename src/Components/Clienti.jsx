import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Delete, getClient } from "../service/Clienti.service";
import { useEffect, useState } from "react";
import { Button, Container, Navbar, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Clienti = () => {
  const [clienti, setClienti] = useState([]);

  const handlePopularclienti = async () => {
    const data = await getClient("http://localhost:3001/clienti");
    setClienti(data.content);
    console.log(data.content);
  };
  
  const handleDelete = async (clienteId) => {
   await Delete("http://localhost:3001/clienti/"+clienteId);
   handlePopularclienti();
    
  };
  useEffect(() => {
    handlePopularclienti();
  }, []);

  const navigate = useNavigate();
  
  return (
    <>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/menu">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h2 className="mb-4 text-center my-5">Lista Clienti</h2>
        <div className="table-responsive div-table_clienti my-3">
          <Table striped bordered hover className="table_clienti mb-5 pb-5">
            <thead>
              <tr>
                <th>ID</th>

                <th>Nome</th>
                <th>Cognome</th>
                <th>Email</th>
                <th>Telefono</th>
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
              {clienti &&
                clienti.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cognome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.partitaIva}</td>
                    <td>{cliente.dataInserimento}</td>
                    <td>{cliente.dataUltimoContatto}</td>
                    <td>{cliente.fatturatoAnnuale}</td>
                    <td>{cliente.pec}</td>
                    <td>{cliente.emailDiContatto}</td>
                    <td>{cliente.telefonoDiContatto}</td>
                    <td>{cliente.logoAziendale}</td>
                    <td>{cliente.tipoClienti}</td>
                    <td>{cliente.sedeLegale?.id}</td>
                    <td>{cliente.sedeOperativa?.id}</td>
                    <td className="d-flex gap-2">
                      <Button variant="outline-warning" size="sm" onClick={() => navigate("/modificaCliente/" + cliente.id)}>
                        <FaEdit />
                      </Button>
                      <Button variant="outline-danger" size="sm" onClick={() => handleDelete(cliente.id)}>
                        <FaTrash />
                      </Button>
                      <Button variant="outline-primary" size="sm" onClick={() => navigate("/")}>
                        <FaEye />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};
export default Clienti;
