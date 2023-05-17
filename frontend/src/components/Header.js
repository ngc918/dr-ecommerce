import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

function Header() {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logout());
	};

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

						{userInfo ? (
							<NavDropdown title={userInfo.firstName} id="username">
								<LinkContainer to="/profile">
									<NavDropdown.Item>Profile</NavDropdown.Item>
								</LinkContainer>

								<NavDropdown.Item onClick={logoutHandler}>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<Nav.Link as={Link} to="/login">
								<i className="fas fa-user"></i>Login
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
