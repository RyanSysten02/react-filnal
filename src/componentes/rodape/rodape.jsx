import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Rodape = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <footer>
      <Container fluid className="bg-dark text-white p-3">
        <Row>
          <Col md={6}>
            <h5>Endereço</h5>
            <p>José Alves, 123, Centro, Osvaldo Cruz - SP, 17700-000</p>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p>(18) 12345-6789</p>
          </Col>
          
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Rodape;
