import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';

export const Heading = () => {
  return (
    <div>
      <Navbar color="dark" dark>
      <Container>
        <NavbarBrand className="second-nav" href="/"> the list of your favourite artists </NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add"> Add Artist</Link>
          </NavItem>
        </Nav>
      </Container>

      </Navbar>
    </div>
  )
}
