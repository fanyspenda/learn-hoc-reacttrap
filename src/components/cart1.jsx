import React from "react";
import { withCounter } from "../hoc/withCounter";
import {
	Container,
	Card,
	CardTitle,
	CardBody,
	CardHeader,
	CardSubtitle,
	CardText,
} from "reactstrap";

class Cart1 extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader tag="h4">This is Cart 1 Page</CardHeader>
				<CardBody>
					<CardTitle tag="h5">Add the item here</CardTitle>
					<CardSubtitle className="mb-2 text-muted">
						this is subtitle
					</CardSubtitle>
					<CardText>this is cardText for content</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default withCounter(Cart1, "1");
