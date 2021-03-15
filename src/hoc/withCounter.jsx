import React from "react";
import { Button, Card, Container } from "reactstrap";

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
				<>
					<Component />
					<Container
						style={{
							width: "330px",
							textAlign: "center",
							border: "2px solid cyan",
							borderRadius: "5px",
						}}
						className="mt-2 p-5"
					>
						<p>{this.state.count}</p>
						<Button
							style={{ width: "130px" }}
							onClick={() => handleClick()}
						>
							Add
						</Button>
					</Container>
				</>
			);
		}
	};
};
