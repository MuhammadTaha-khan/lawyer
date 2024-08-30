import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {

  const [isDropdownvisible, setDropdownvisible] = useState(false)

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  return (
    <div className="nav-bar">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid >
          <Navbar.Brand href="#" className='logo me-auto'>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar " onClick={handleShowOffcanvas} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={handleCloseOffcanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/service" className="nav-item nav-link">Practice</NavLink>
                <NavLink to="/team" className="nav-item nav-link">Attorneys</NavLink>
                <NavLink to="/portfolio" className="nav-item nav-link">Case Studies</NavLink>
                <NavDropdown title="Pages" id="navbarScrollingDropdown"
                onMouseEnter={()=>setDropdownvisible(true)}
                onMouseLeave={()=> setDropdownvisible(false)}
                show={isDropdownvisible}
                >
                  <NavDropdown.Item as={NavLink} to="/blog">Blog</NavDropdown.Item>
                  {/* <NavDropdown.Item as={NavLink} to="/single">Single</NavDropdown.Item> */}
                </NavDropdown>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
              </Nav>
              <Nav className="ms-auto">
                {/* <Nav.Link href="#" className="btn">Get Appointment</Nav.Link> */}
                <NavLink to="/Appservice" className="Nv-button" activeClassName="active">Get Appointment</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
