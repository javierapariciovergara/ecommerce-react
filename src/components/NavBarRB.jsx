/* NavBar React-Bootstrap */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from './CartWidgetRI';

function NavBarRB() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img className="logo-nav" src="./img/main.png" alt="Ecommerce"/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Novedades</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Producto1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Producto2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mas Vendidos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                HotSale1
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetRI/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRB;