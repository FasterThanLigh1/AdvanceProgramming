import { MouseEventHandler } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const authenticated = localStorage.getItem('token') != null;
	const navigate = useNavigate();
	const handleLogout: MouseEventHandler = (event) => {
		event.preventDefault();
		localStorage.removeItem('token');
		navigate('/login');
	};
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Nav className="me-auto">
					<Link className="nav-link" to={'/'}>
						Home
					</Link>
				</Nav>
				<NavbarBrand>
					<span className="fs-3 bi bi-journals"> BOOK EXCHANGE </span>
				</NavbarBrand>
				<Nav className="ms-auto">
					{authenticated ? (
						<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
					) : (
						<>
							<Link className="nav-link" to={'/login'}>
								Login
							</Link>
							<Link className="nav-link" to={'/register'}>
								Register
							</Link>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
