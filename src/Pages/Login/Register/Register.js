import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile = {
          displayName: name,
          photoURL:photoURL
        };
        createUser(email,password)
        .then(result=>{
            updateUserProfile(profile)
            .then(()=>{})
            .catch(error=>{
              console.error(error);
            })
            toast.success(`Hey ${name}! Registration is successful`)
            navigate('/');

        })
        .catch(error=>{
            console.error("Error: ",error);
        })
    }
  return (
    <Form onSubmit={handleSubmit}
      style={{ marginTop: "50px" }}
      className="border border-dark p-5 bg-dark text-white"
    >
      <h1 className="text-center text-white fw-bolder"> REGISTER!!</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          type="text"
          name="photoURL"
          placeholder="Enter photoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="light" type="submit">
        Register
      </Button>
      <p className="mt-3">
        Already a member? <Link to="/login">Login</Link>
      </p>
    </Form>
  );
};

export default Register;
