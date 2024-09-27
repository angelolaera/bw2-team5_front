import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Delete, getClient } from "../service/Clienti.service";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const Province = () => {
  const [province, setProvince] = useState([]);

  const handlePopularprovince = async () => {
    const data = await getClient("http://localhost:3001/province");
    setProvince(data.content);
    console.log(data.content);
  };

  useEffect(() => {
    handlePopularprovince();
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <h2 className="mb-4 text-center position-absolute top-0 my-5">Lista Province</h2>
      <div className="table-responsive div-table_Indirizzi position-absolute w-100 px-5 start-0 my-3">
        <Table striped bordered hover className="table_Indirizzi mb-5 pb-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Regione</th>
              <th>Sigla</th>
            </tr>
          </thead>
          <tbody>
            {province?.map((provincia) => (
              <tr key={provincia.id}>
                <td>{provincia?.id}</td>
                <td>{provincia?.cap}</td>
                <td>{provincia?.civico}</td>
                <td>{provincia?.localita}</td>
                <td>{provincia?.via}</td>
                <td>{provincia?.tipoprovincia}</td>
                <td>{provincia?.provincia?.id}</td>
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

export default Province;
