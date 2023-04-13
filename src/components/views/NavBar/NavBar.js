import { Navbar, NavLink, Nav, Container } from "react-bootstrap";


const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" className="rounded px-1">
            <Container>
                <Navbar.Brand>Waiter.app</Navbar.Brand>
                <Nav >
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;