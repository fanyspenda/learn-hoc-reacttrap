import React from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
// import { withCounter } from "./hoc/withCounter";
import Cart1 from "./components/cart1";
import Cart2 from "./components/cart2";
import { Container, Row, Col, Alert } from "reactstrap";

class App extends React.Component {
	render() {
		// const NewCart1 = withCounter(Cart1);
		// const NewCart2 = withCounter(Cart2);
		return (
			<Container>
				<Router>
					<Row>
						<Col>
							{/* alert */}
							<Alert color="primary">
								hello, iam alert with primary color{" "}
								<a href="#" className="alert-link">
									and im a link!
								</a>
							</Alert>
						</Col>
					</Row>
					<Switch>
						<Route path="/cart1" component={Cart1} />
						<Route path="/cart2" component={Cart2} />
					</Switch>
					<Row className="text-center">
						<Col xs="3">
							<Link to="/cart1">go to Cart 1</Link>
						</Col>
						<Col xs="6"></Col>
						<Col xs="3">
							<Link to="/cart2">go to Cart 2</Link>
						</Col>
					</Row>
				</Router>
			</Container>
		);
	}
}

export default App;
