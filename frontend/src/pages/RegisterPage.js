import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import ErrorMessage from "../components/Error";
import FormContainer from "../components/FormContainer";
import { login, register } from "../actions/userActions";
import axios from "axios";

function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const redirect = location.state ? Number(location.state) : "/";

	const userRegister = useSelector((state) => state.userRegister);
	const { error, loading, userInfo } = userRegister;

	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setErrorMessage("Passwords do not match");
		} else {
			dispatch(register(name, email, password));
		}
	};

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	return (
		<FormContainer>
			<h1>Register</h1>
			{loading && <Loading />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						type="name"
						placeholder="Enter name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						required
						type="email"
						placeholder="Enter Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type="password"
						placeholder="Enter Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="passwordConfirm">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						required
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>

			<Row className="py-3">
				<Col>
					Already have an account?
					<Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
						Sign In
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
}

export default RegisterPage;
