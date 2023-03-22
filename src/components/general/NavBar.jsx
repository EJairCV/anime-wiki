import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()

 const handleClick = (e)=>{
  if (e.target.inputsearch.value != "") {
    navigate(`/search/${e.target.inputsearch.value}`);
  }
  
  
  
  
 }

  return (
    <Navbar bg="primary " variant="dark" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          Recomendados
        </NavLink>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/animes">
              Animes
            </NavLink>
          </Nav>
          <Form onSubmit={(e)=>{
            e.preventDefault()
            handleClick(e)
            }} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="inputsearch"
            />
            <Button type="submit" variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
