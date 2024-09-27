import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClient } from "../service/Clienti.service";
import { Card, ListGroup } from "react-bootstrap";

const ViewIndirizzi=()=>{
    const { id } = useParams();
    const [indirizzo, setIndirizzo] = useState({})
    const handlePopularIndirizzi = async () => {
        const indirizziData = await getClient(
          "http://localhost:3001/indirizzi/" + id
        );
        setIndirizzo(indirizziData);
        console.log(indirizziData);
      };
    
      useEffect(() => {
        handlePopularIndirizzi();
      }, [id]);

      return (
        <Card style={{ width: '40rem', margin: '20px auto' }}>
            <Card.Body>
                <Card.Title className="text-center mb-4">Dettagli Indirizzo</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>ID:</strong> {indirizzo?.id}</ListGroup.Item>
                    <ListGroup.Item><strong>Via:</strong> {indirizzo?.via}</ListGroup.Item>
                    <ListGroup.Item><strong>Civico:</strong> {indirizzo?.civico}</ListGroup.Item>
                    <ListGroup.Item><strong>Località:</strong> {indirizzo?.localita}</ListGroup.Item>
                    <ListGroup.Item><strong>CAP:</strong> {indirizzo?.cap}</ListGroup.Item>
                    <ListGroup.Item><strong>Tipo Indirizzo:</strong> {indirizzo?.tipoIndirizzo}</ListGroup.Item>
                </ListGroup>

                <Card.Subtitle className="mt-3 mb-2 text-muted">Comune</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Id Comune:</strong> {indirizzo?.comune?.id}</ListGroup.Item>
                    <ListGroup.Item><strong>Nome Comune:</strong> {indirizzo?.comune?.nome}</ListGroup.Item>
                </ListGroup>

                <Card.Subtitle className="mt-3 mb-2 text-muted">Provincia</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Id Provincia:</strong> {indirizzo?.comune?.provincia?.id}</ListGroup.Item>
                    <ListGroup.Item><strong>Nome Provincia:</strong> {indirizzo?.comune?.provincia?.nome}</ListGroup.Item>
                    <ListGroup.Item><strong>Sigla Provincia:</strong> {indirizzo?.comune?.provincia?.sigla}</ListGroup.Item>
                    <ListGroup.Item><strong>Regione:</strong> {indirizzo?.comune?.provincia?.regione}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );


}
export default ViewIndirizzi;

