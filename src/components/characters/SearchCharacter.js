import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchCharacter({ handleSearch }) {
    return (
        <InputGroup className="searchPokemon">
            <FormControl placeholder="Search Pokemon......." onChange={event => handleSearch(event)} />
        </InputGroup>
    );
}

SearchCharacter.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default SearchCharacter;