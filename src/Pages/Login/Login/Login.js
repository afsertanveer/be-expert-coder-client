import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const { githubLogin, googleLogin, userSignIn } = useContext(AuthContext);


    //normal user login
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        userSignIn(email,password)
        .then(result=>{
            const user = result.user;
            toast.success("Succesfully Logged in")
        })
        .catch(error=>{
            toast.error(error);
        })
    }


    // github login button action 
    const handleGithubLogin = () =>{
        githubLogin()
        .then(result=>{
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log(user);
            toast.success('Successful Github Login');
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
               const token = credential.accessToken;
               // The signed-in user info.
               const user = result.user;
               console.log(user);
            toast.success(`Succesful Google Login ${user.displayName}`)
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