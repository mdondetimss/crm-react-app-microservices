import { Container, Navbar, Nav } from "react-bootstrap"
import './Header.css'
import{Link} from 'react-router-dom'
const Header1 = () =>{
    return(
        <>
        <Navbar bg='primary' variant='dark'>
        <Container>
            <Navbar.Brand to='/'><strong  > Customer Relationship Management System</strong></Navbar.Brand>
            <Nav className ='ml-auto'>
            <Nav.Link as ={Link} to='/' class-name='nav-link'>Customers</Nav.Link>
            <Nav.Link as ={Link} to='/register'class-name='nav-link'>Register</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </>
    )
}
export default Header1
