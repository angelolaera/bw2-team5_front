import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Delete, getClient } from "../service/Clienti.service";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const Comuni = () => {
  const [comuni, setComuni] = useState([]);

  const handlePopularcomuni = async () => {
    const data = await getClient("http://localhost:3001/comuni");
    setComuni(data.content);
    console.log(data.content);
  };

  useEffect(() => {
    handlePopularcomuni();
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <h2 className="mb-4 text-center position-absolute top-0 my-5">Lista Comuni</h2>
      <div className="table-responsive div-table_Indirizzi position-absolute w-100 px-5 start-0 my-3">
        <Table striped bordered hover className="table_Indirizzi mb-5 pb-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Città</th>
              <th>Provincia</th>
            </tr>
          </thead>
          <tbody>
            {comuni?.map((comune) => (
              <tr key={comune.id}>
                <td>{comune?.id}</td>
                <td>{comune?.cap}</td>
                <td>{comune?.civico}</td>
                <td>{comune?.localita}</td>
                <td>{comune?.via}</td>
                <td>{comune?.tipocomune}</td>
                <td>{comune?.comune?.id}</td>
                <td className="d-flex gap-2">
                  <Button variant="outline-warning" size="sm" onClick={() => navigate("/modificaIndirizzo/" + indirizzo.id)}>
                    <FaEdit />
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(indirizzo.id)}>
                    <FaTrash />
                  </Button>
                  <Button variant="outline-primary" size="sm" onClick={() => navigate("/viewIndirizzo/" + indirizzo.id)}>
                    <FaEye />
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

export default Comuni;
