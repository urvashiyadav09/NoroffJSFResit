import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Grass from "../grass/Grass";
import Contact from "../contact/Contact";
import CharacterDetail from "../characters/CharacterDetail";

function Header() {
	return (
		<Router>
			<Navbar collapseOnSelect className="navbar" sticky="top" expand="lg">

				<NavLink to="/" exact>
					<Navbar.Brand className="navbar__logo">Pokemon</Navbar.Brand>
				</NavLink>

				<Navbar.Toggle aria-controls="basic-navbar-nav" data-toggle="collapse" />
				<Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">

					<Nav className="justify-content-end ml-auto">
						<NavLink eventKey="1" as={Link} to="/" exact className="navbar__nav-link">Home</NavLink>
						<NavLink eventKey="2" as={Link} to="/grass" className="navbar__nav-link">Grass</NavLink>
						<NavLink eventKey="3" as={Link} to="/contact" className="navbar__nav-link">Contact</NavLink>
					</Nav>

				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/grass" component={Grass} />
					<Route path="/contact" component={Contact} />
					<Route path="/character/:id" component={CharacterDetail} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Header;
