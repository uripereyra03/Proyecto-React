import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import CalzadoContent from './ContenidoCalzado'; // Importa el componente de contenido de calzado

function UriApp() {
    return (
        <Container>
            <h1>UriApp</h1>
            <Row>
                <Col md={3}>
                    <h2>Categorías</h2>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/categoria1">Zapatillas</Nav.Link>
                        <Nav.Link href="/categoria2">Botines futbol 5</Nav.Link>
                        <Nav.Link href="/categoria1">Botines futbol 11</Nav.Link>
                        <Nav.Link href="/categoria2">Botines futbol 11, tapones combinados</Nav.Link>
                        {/* Agrega más categorías aquí */}
                    </Nav>
                </Col>
                <Col md={9}>
                    {/* Contenido de calzado */}
                    <CalzadoContent />
                </Col>
            </Row>
        </Container>
    );
}

export default UriApp;


