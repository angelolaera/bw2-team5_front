import { Container, Table, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Delete, getClient } from "../service/Clienti.service";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const Fatture = () => {
  const [fatture, setFatture] = useState([]);

  const handlePopularFatture = async () => {
    const data = await getClient("http://localhost:3001/fatture");
    setFatture(data.content);
    console.log(data.content);
  };

  useEffect(() => {
    handlePopularFatture();
  }, []);

  const handleDelete = async (fattureId) => {
    await Delete("http://localhost:3001/fatture/" + fattureId);
    handlePopularFatture();
  };
 const navigate = useNavigate();

  console.log(fatture);

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

      <Container fluid className="my-5">
        <h2 className="mb-4 text-center ">Lista Fatture</h2>
        <Table striped bordered hover className="table_fatture">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data Fattura</th>
              <th>Importo</th>
              <th>Numero</th>
              <th>Stato Fattura</th>
              <th>Cliente id</th>
            </tr>
          </thead>
          <tbody>
            {fatture?.map((fatture) => (
              <tr key={fatture.id}>
                <td>{fatture?.id}</td>
                <td>{fatture?.dataFattura}</td>
                <td>{fatture?.importo}</td>
                <td>{fatture?.numero}</td>
                <td>{fatture?.statoFattura}</td>
                <td>{fatture?.cliente?.id}</td>
                <td className="d-flex gap-2">
                  <Button
        
                    variant="outline-warning"
                    size="sm"
                    onClick={() => navigate("/modificaFatture/" + fatture.id)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(fatture.id)}
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => navigate("/viewFatture/" + fatture.id)}
                  >
                    <FaEye />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default Fatture;
