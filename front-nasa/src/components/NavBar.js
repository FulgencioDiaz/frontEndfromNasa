import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex">
        <Link className="navbar-brand" to="/">
          N A S A
        </Link>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Inicio
          </NavLink>
          <NavLink className="nav-link" to="/landings">
            Landings
          </NavLink>
          <NavLink className="nav-link" to="/neas">
            Neas
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
