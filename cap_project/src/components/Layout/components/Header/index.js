import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '~/assets/images/unity.png';
import './style.scss';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="shadow shadow-bottom" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} alt="" className="me-2" style={{ maxHeight: '27px' }} />
            <h4 className="mb-0">Unity</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" basic-navbar-nav="true">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/upload">
                Upload File
              </NavLink>
              <NavLink className="nav-link" to="/admin/users">
                Users Control
              </NavLink>
              <NavLink className="nav-link" to="/admin/working_role">
                Working Role
              </NavLink>
            </Nav>
            <NavLink className="btn fw-bold me-3 login" to="/login">
              Login
            </NavLink>
            <NavLink className="btn fw-bold register" to="/register">
              Register
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
