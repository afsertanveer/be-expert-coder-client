import React from 'react';
import { Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import Logo from '../../assets/website-logo/logo.gif';
import './Header.css';

const Header = () => {
    return (
      <Navbar
        collapseOnSelect
        className="nav-background"
        expand="lg"
        bg=""
        variant="dark"
      >
        <Container>
          <Link to='/' id="brand-link">
            <Image src={Logo} className="w-75"></Image>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="menu me-auto">
              <Link>Courses</Link>
              <Link>Blogs</Link>
            </Nav>
            <Nav className='login'>
              <Link>Login</Link>
              <Link>Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;