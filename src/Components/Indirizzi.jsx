import { Button, Container, Table } from "react-bootstrap";
import { Delete, getClient } from "../service/Clienti.service";
import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Indirizzi = () => {
  const [indirizzi, setIndirizzi] = useState([]);

  const handlePopularIndirizzi = async () => {
    const data = await getClient("http://localhost:3001/indirizzi");
    setIndirizzi(data);
    console.log(data);
  };
  console.log(indirizzi);

  useEffect(() => {
    handlePopularIndirizzi();
  }, []);

  const handleDelete = async (indirizzoId) => {
    await Delete("http://localhost:3001/indirizzi/"+indirizzoId);
    handlePopularIndirizzi();
     
   };
  const navigate = useNavigate();

  return (
    <Container>
      <h2 className="mb-4 text-center position-absolute top-0 my-5">
        Lista Indirizzi
      </h2>
      <div className="table-responsive div-table_Indirizzi position-absolute w-100 px-5 start-0 my-3">
        <Table striped bordered hover className="table_Indirizzi mb-5 pb-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>CAP</th>
              <th>Civico</th>
              <th>Località</th>
              <th>Via</th>
              <th>Tipo indirizzo</th>
              <th>ComuneID</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {indirizzi?.map((indirizzo) => (
              <tr key={indirizzo.id}>
                <td>{indirizzo?.id}</td>
                <td>{indirizzo?.cap}</td>
                <td>{indirizzo?.civico}</td>
                <td>{indirizzo?.localita}</td>
                <td>{indirizzo?.via}</td>
                <td>{indirizzo?.tipoIndirizzo}</td>
                <td>{indirizzo?.comune?.id}</td>
                <td className="d-flex gap-2">
                  <Button
                    variant="outline-warning"
                    size="sm"
                    onClick={() => navigate("/modificaIndirizzo/" + indirizzo.id)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(indirizzo.id)}
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => navigate("/viewIndirizzo/"+indirizzo.id)}
                  >
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
export default Indirizzi;
