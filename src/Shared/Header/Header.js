import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../../assets/website-logo/logo.gif';
import './Header.css';

const Header = () => {
    const [btnName,setBtnName] = useState(false);
    const toggleButton = () =>{
        setBtnName(!btnName);
    }
    return (
      <Navbar
        collapseOnSelect
        className="nav-background"
        expand="lg"
        bg=""
        variant="dark"
      >
        <Container>
          <Link to="/" id="brand-link">
            <Image src={Logo} className="w-75"></Image>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="menu me-auto">
              <Link>Courses</Link>
              <Link>FAQ</Link>
              <Link>Blogs</Link>
            </Nav>
            <Nav className="login">
              {btnName ? (
                <Button onClick={toggleButton} variant="dark">
                  Dark
                </Button>
              ) : (
                <Button onClick={toggleButton} variant="dark">
                  Light
                </Button>
              )}
              <Link>Login</Link>
              <Link>Register</Link>
              <FaUserAlt className="ms-3 mt-3"></FaUserAlt>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;