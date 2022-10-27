import React, { useContext, useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { toast } from 'react-hot-toast';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../../assets/website-logo/logo.gif';
import { AuthContext } from '../../Context/AuthProvider';
import './Header.css';

const Header = () => {
    const {user,userSignOut} = useContext(AuthContext);
    const [btnName,setBtnName] = useState(false);
    const [nameDisplay,setNameDisplay] = useState(false);
    const toggleButton = () =>{
        setBtnName(!btnName);
    }
    const handleButton = ()=>{
        userSignOut()
        .then(()=>{

        })
        .catch(error=>{
            toast.error(error);
        })
    }
    const handleHoverIn = () =>{
      setNameDisplay(!nameDisplay);
    }
    const handleHoverOut = () =>{
      setNameDisplay(!nameDisplay)
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
              <Link to="/courses">Courses</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blogs">Blogs</Link>
              {btnName ? (
                <Button
                  className="ms-3 toggleButton"
                  onClick={toggleButton}
                  variant="dark"
                >
                  Dark
                </Button>
              ) : (
                <Button
                  className="ms-3 toggleButton"
                  onClick={toggleButton}
                  variant="light"
                >
                  Light
                </Button>
              )}
            </Nav>

            <Nav className="login">
              <div className="me-2">
                {nameDisplay && user?.displayName && (
                  <span className="text-white mx-2 d-block">
                    {user.displayName}
                  </span>
                )}
              </div>

              {user?.uid ? (
                <>
                  {user?.photoURL && (
                    <Image
                      className="ms-3 mt-1 w-50"
                      onMouseOver={handleHoverIn}
                      onMouseOut={handleHoverOut}
                      src={user.photoURL}
                      style={{ height: "45px" }}
                    ></Image>
                  )}
                  <Button onClick={handleButton} variant="link">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link className="fw-bold" to="/login">
                    Login
                  </Link>
                  <Link className="fw-bold" to="/register">
                    Register
                  </Link>
                  <FaUserAlt className="ms-3 mt-3"></FaUserAlt>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;