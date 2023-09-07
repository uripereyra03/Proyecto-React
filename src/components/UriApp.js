import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function UriApp() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Uri App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/categoria1">Calzado</Nav.Link>
                        <Nav.Link href="/categoria2">Ropa</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default UriApp;
