import { Container } from "react-bootstrap";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Routes>
						{" "}
						<Route path="/" element={<HomePage />} exact />
						<Route path="/product/:_id" element={<ProductPage />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
