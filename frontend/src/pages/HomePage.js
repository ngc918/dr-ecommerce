import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loading from "../components/Loading";
import ErrorMessage from "../components/Error";
import { listProducts } from "../actions/productActions";

function HomePage() {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div>
			<h1>Latest Products</h1>
			{loading ? (
				<Loading />
			) : error ? (
				<ErrorMessage variant="danger">{error}</ErrorMessage>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={4} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default HomePage;
