import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { login } from "../actions/userActions";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return <div>Login</div>;
}

export default LoginPage;
