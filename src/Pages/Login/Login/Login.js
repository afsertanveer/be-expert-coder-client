import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <Form
        style={{ marginTop: "50px" }}
        className="border border-dark p-5 bg-dark text-white"
      >
        <h1 className="text-center text-white fw-bolder">Please Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Login
        </Button>
        <p className="mt-3">
          Not Member? <Link to="/register">Register</Link>
        </p>
        <div className='text-center'>
          <Button variant="light d-block mb-4 w-100" >
            <FaGoogle></FaGoogle> Sign in With Google
          </Button>
          <Button variant="light d-block w-100">
            <FaGithub></FaGithub> Sign in With Github
          </Button>
        </div>
      </Form>
    );
};

export default Login;