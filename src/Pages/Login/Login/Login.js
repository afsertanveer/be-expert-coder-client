import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

  
const Login = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { githubLogin, googleLogin, userSignIn, setLoading } =
      useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    //normal user login
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
          .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            toast.success("Succesfully Logged in");
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
    }


    // github login button action 
    const handleGithubLogin = () =>{
        githubLogin()
        .then(result=>{
            
            const user = result.user;
            toast.success('Successful Github Login');
            
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.error("Error=> ",error);
        })
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result=>{
               const credential =
                 GoogleAuthProvider.credentialFromResult(result);
                 const user= result.user;
            toast.success(`Succesful Google Login ${user.displayName}`)
            
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.error("Error==> ",error);
        })
    }


    return (
      <Form
        onSubmit={handleSubmit}
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

        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="mt-3">
          Not Member? <Link to="/register">Register</Link>
        </p>
        <div className="text-center">
          <Button
            onClick={handleGoogleLogin}
            variant="light d-block mb-4 w-100"
          >
            <FaGoogle></FaGoogle> Sign in With Google
          </Button>
          <Button onClick={handleGithubLogin} variant="light d-block w-100">
            <FaGithub></FaGithub> Sign in With Github
          </Button>
        </div>
      </Form>
    );
};

export default Login;