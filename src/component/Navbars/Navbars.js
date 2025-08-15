import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbars.css";
import logo from "../../assets/image/ecommerce_logo.webp";

const Navbars = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">features</Nav.Link>
            <Nav.Link href="#slider">Best-Seller</Nav.Link>
            <Nav.Link href="#send-me">Contact-Us</Nav.Link>
            <Nav.Link href="#Reviews">Reviews</Nav.Link>
            <Nav.Link href="#Info">Info</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#home">Action</NavDropdown.Item>
              <NavDropdown.Item href="#home">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#home">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#home">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
