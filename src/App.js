import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { withCounter } from "./hoc/withCounter";
import Cart1 from "./components/cart1";
import Cart2 from "./components/cart2";

class App extends React.Component {
	render() {
		// const NewCart1 = withCounter(Cart1);
		// const NewCart2 = withCounter(Cart2);
		return (
			<div className="App">
				<Router>
					<Link to="/cart1">go to Cart 1</Link>
					<Link to="/cart2">go to Cart 2</Link>

					<Switch>
						<Route path="/cart1" component={Cart1} />
						<Route path="/cart2" component={Cart2} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
