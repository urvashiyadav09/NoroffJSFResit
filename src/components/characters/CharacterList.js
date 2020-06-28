import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterItem from "./CharacterItem";
import { BASE_URL } from "../../constants/Api";
import Search from "./SearchCharacter";


function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filterPokemon, setfilterPokemon] = useState([]);

	useEffect(() => {
		fetch(BASE_URL)
			.then(response => response.json())
			.then(json => {
				setCharacters(json.cards);
				setfilterPokemon(json.cards);
			})
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	const filterCards = function (x) {

		const searchCard = x.target.value.toLowerCase();
		const filteredPokemonArray = characters.filter(function (char) {
			const lowerCaseName = char.name.toLowerCase();

			if (lowerCaseName.startsWith(searchCard)) {

				return true;
			}
			return false;
		});

		// set filtered Pokemon to the new array
		setfilterPokemon(filteredPokemonArray);
	};


	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}




	return (
		<>

			<Search handleSearch={filterCards} />
			<Row>
				{filterPokemon.map(character => {

					const { id, imageUrl } = character;



					return (
						<Col sm={6} md={3} lg={3} key={id}>
							<CharacterItem id={id} image={imageUrl} />
						</Col>

					);

				})}
			</Row>

		</>

	);
}

export default CharacterList;
