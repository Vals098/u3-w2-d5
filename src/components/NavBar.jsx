import { Container, Nav, Navbar } from "react-bootstrap"


const NavBar = function(){
    return(
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Weather App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {/* just testing the routing, to be deleted from NavBar when implemented in card: */}
          <Nav.Link href="/details">Details</Nav.Link>  
        </Nav>
      </Container>
    </Navbar>
    )
}

export default NavBar