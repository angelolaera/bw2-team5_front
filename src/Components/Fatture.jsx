import { Container, Table } from "react-bootstrap";

const Fatture = () => {
  const invoice = [
    { id: 1, dataFattura: "2024-09-25", importo: "234", numero: "123456789", statoFattura: "Pending", clienteId: "12" },
    { id: 2, dataFattura: "2024-09-24", importo: "100", numero: "123456799", statoFattura: "Pending", clienteId: "13" },
    { id: 3, dataFattura: "2024-09-23", importo: "250", numero: "123456999", statoFattura: "Pending", clienteId: "14" },
  ];

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
          {invoice.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.dataFattura}</td>
              <td>{invoice.importo}</td>
              <td>{invoice.numero}</td>
              <td>{invoice.statoFattura}</td>
              <td>{invoice.clienteId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Fatture;
