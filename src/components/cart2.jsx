import React from "react";
import { withCounter } from "../hoc/withCounter";

class Cart2 extends React.Component {
	render() {
		return (
			<>
				<p>this is Cart 2 page</p>
			</>
		);
	}
}

export default withCounter(Cart2);
