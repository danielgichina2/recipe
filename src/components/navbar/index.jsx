import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Recipes Management System</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="new">Add Recipe</Nav.Link>
                        <Nav.Link href="/">Refresh</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;