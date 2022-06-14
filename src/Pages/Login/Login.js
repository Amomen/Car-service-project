import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const Login = () => {
    const location = useLocation();
    const emailRef = useRef("");
    const passRef = useRef("");
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(emailRef, passRef);
    };

    if (loading) {
        return <p>Loading...</p>;
    } else {
        let from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        // navigate("/about");
    }
    const navigateRegister = (event) => {
        navigate("/register");
    };

    return (
        <div className="mt-10 container mx-auto w-50">
            <h2 className="text-primary mt-4 text-center">Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>
                new to genius car?{" "}
                <span className="text-danger" style={{ cursor: "pointer" }} onClick={navigateRegister}>
                    please Register
                </span>
            </p>
        </div>
    );
};

export default Login;
