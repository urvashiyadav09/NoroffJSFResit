import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CharacterItem({ id, image }) {
	return (
		<Card>
			<Card.Img variant="top" src={image} />

			<Card.Body>

				<Link to={"character/" + id}>
					<Button className="viewmoreBtn" block>View Details</Button>
				</Link>
			</Card.Body>

		</Card>
	);
}

CharacterItem.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,


};

export default CharacterItem;
