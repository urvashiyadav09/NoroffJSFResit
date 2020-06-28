import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../constants/Api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterItem from "../characters/CharacterItem";


function FilterGrass() {

    const [filteredGrass, setFilteredGrass] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {

                setFilteredGrass(json.cards);
            })

            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);


    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }


    return (
        <Row>
            {filteredGrass
                .filter(character => { return ((character.supertype === "Pokémon") && (character.types[0] === "Grass")) })
                .map((character, i) => {
                    const { id, name, imageUrl } = character;
                    return (
                        <Col sm={6} md={3} key={id}>
                            <CharacterItem id={id} name={name} image={imageUrl} />
                        </Col>


                    );
                })}
        </Row>
    );
}


export default FilterGrass;
