import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import ErrorMessage from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProductsDetails } from "../actions/productActions";

function ProductPage() {
	const { _id } = useParams();
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductsDetails(_id));
	}, [_id, dispatch]);

	return (
		<div>
			<Link to="/" className="btn btn-light my-3">
				Go Back
			</Link>
			{loading ? (
				<Loading />
			) : error ? (
				<ErrorMessage variant="danger">{error}</ErrorMessage>
			) : (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>
					<Col md={3}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>

							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>

							<ListGroup.Item>
								<h3>Price: ${product.price}</h3>
							</ListGroup.Item>

							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col md={3}>
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Button
										className="btn-block"
										type="button"
										disabled={product.countInStock === 0}
									>
										Add to Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</div>
	);
}

export default ProductPage;
