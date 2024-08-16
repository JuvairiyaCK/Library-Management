import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'/'}>
          <Navbar.Brand href="">
          <i className="fa-solid fa-book" />
            {' '}
            Library
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header