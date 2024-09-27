import { Container, Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { getClient } from "../service/Clienti.service";

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

  console.log(fatture);

  return (
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Fatture;
