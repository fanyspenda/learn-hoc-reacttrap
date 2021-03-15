import React from "react";
import { withCounter } from "../hoc/withCounter";

class Cart1 extends React.Component {
	render() {
		return (
			<>
				<p>this is Cart 1 Page</p>
			</>
		);
	}
}

export default withCounter(Cart1);
