import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { BASE_URL } from "../../constants/Api";

function CharacterDetail() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();
	console.log("id detail", id);

	const url = BASE_URL + "/" + id;

	console.log("id detail", url);
	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
		// eslint-disable-next-line
	}, []);


	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}

	return (
		<Row>

			<Col>
				<Card>
					<Card.Img variant="top" src={detail.imageUrl} />
					<Card.Body>

						<Card.Title><b>Name:{detail.name}</b></Card.Title>
						<Card.Title><b>Types:&nbsp;</b>{detail.types}</Card.Title>
						<Card.Title><b>Evolves From:&nbsp;</b>{detail.evolvesFrom}</Card.Title>
						<Card.Title><b>Artist:&nbsp;</b>{detail.artist}</Card.Title>

					</Card.Body>

				</Card>


			</Col>
		</Row>
	);
}

export default CharacterDetail;
