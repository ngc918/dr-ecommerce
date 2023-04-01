import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from "react-bootstrap";
import ErrorMessage from "../components/Error";
import { addToCart } from "../actions/cartActions";

function CartPage() {
	const location = useLocation();
	const { _id } = useParams();
	const productId = _id;
	const qty = location.search ? Number(location.search.split("=")[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	console.log("cartItems:");

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<ErrorMessage variant="info">
						Your cart is empty <Link to="/">Go Back</Link>
					</ErrorMessage>
				) : (
					<ListGroup variant="flush"></ListGroup>
				)}
			</Col>
			<Col md={4}></Col>
		</Row>
	);
}

export default CartPage;
