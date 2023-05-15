import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<FormContainer>
			<h1>Sign In</h1>
			<Form onSubmit={}>
				<Form.Group controlId="email">
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Email"
						value="email"
					></Form.Control>
				</Form.Group>
			</Form>
		</FormContainer>
	);
}

export default LoginPage;
