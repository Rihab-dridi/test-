import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
export default function navbar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Contcats</Nav.Link>
      <Nav.Link href="#pricing">dashboard </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
