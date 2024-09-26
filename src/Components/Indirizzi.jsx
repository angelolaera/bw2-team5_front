import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const Indirizzi = () => {
  const [indirizzi, setIndirizzi] = useState([]);
  const [error, setError] = useState(null);


  const fetchIndirizzi = async () => {
    try {
      const response = await fetch("http://localhost:3001/indirizzi", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      });
      if (!response.ok) {
        throw new Error("Errore nel recupero degli indirizzi");
      }
      const data = await response.json();
      setIndirizzi(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchIndirizzi();
  }, []);

  return (
    <Container fluid className="my-5">
      <h2 className="mb-4 text-center">Lista Indirizzi</h2>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Via</th>
              <th>Civico</th>
              <th>Località</th>
              <th>CAP</th>
              <th>Comune</th>
            </tr>
          </thead>
          <tbody>
            {indirizzi.length > 0 ? (
              indirizzi.map((indirizzo) => (
                <tr key={indirizzo.id}>
                  <td>{indirizzo.id}</td>
                  <td>{indirizzo.via}</td>
                  <td>{indirizzo.civico}</td>
                  <td>{indirizzo.localita}</td>
                  <td>{indirizzo.cap}</td>
                  <td>{indirizzo.comune.nome}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Nessun indirizzo trovato
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Indirizzi;