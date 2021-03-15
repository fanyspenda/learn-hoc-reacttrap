import React from "react";

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
					<button onClick={() => handleClick()}>Add</button>
					<p>{this.state.count}</p>
				</div>
			);
		}
	};
};
