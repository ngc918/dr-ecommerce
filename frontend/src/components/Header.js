import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
			<Container fluid>
				<Navbar.Brand as={Link} to="/">
					Shop
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="/cart">
							<i className="fas fa-shopping-cart"></i>Cart
						</Nav.Link>
						<Nav.Link as={Link} to="/login">
							<i className="fas fa-user"></i>Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
