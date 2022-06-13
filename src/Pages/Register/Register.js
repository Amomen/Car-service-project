import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const navigateToLogin = (event) => {
        event.preventDefault();
        navigate("/login");
    };
    return (
        <div className="container mx-automt-10 container mx-auto w-50">
            <h2 className="text-danger text-center">Please Register</h2>
            <Form className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Register
                </Button>
                <p>
                    already have an account ?{" "}
                    <span className="text-primary " onClick={navigateToLogin} style={{ cursor: "pointer" }}>
                        Please login
                    </span>
                </p>
            </Form>
        </div>
    );
};

export default Register;
