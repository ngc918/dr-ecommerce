import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const redirect = location.state ? Number(location.state) : "/";
	const userLogin = useSelector((state) => state.userLogin);
	const { error, loading, userInfo } = userLogin;

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	return (
		<FormContainer>
			<h1>Sign In</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="email">
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button variant="primary" type="submit">
					Sign In
				</Button>
			</Form>

			<Row className="py-3">
				<Col>
					New Customer?
					<Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
						Don't have an account? Sign Up
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
}

export default LoginPage;
