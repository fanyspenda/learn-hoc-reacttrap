import React from "react";
import { Button } from "reactstrap";

export const withCounter = (Component) => {
	return class extends React.Component {
		constructor() {
			super();
			this.state = {
				count: 0,
			};
		}

		render() {
			const handleClick = () => {
				this.setState({
					count: this.state.count + 1,
				});
			};
			return (
				<div>
					<Component />
					<Button onClick={() => handleClick()}>Add</Button>
					<p>{this.state.count}</p>
				</div>
			);
		}
	};
};
