import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../Login/Social/SocialLogin";

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    };

    const navigateToLogin = (event) => {
        event.preventDefault();
        navigate("/login");
    };
    if (user) {
        navigate("/home");
        console.log(user);
    }

    return (
        <div className="container mx-automt-10 container mx-auto w-50">
            <h2 className="text-danger text-center">Please Register</h2>
            <Form className="" onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={() => {
                            setAgree(!agree);
                        }}
                        type="checkbox"
                        name="terms"
                        id="terms"
                    />
                    <label className={agree ? "text-primary" : "text-danger"} htmlFor="terms">
                        I Accept Terms and Conditions
                    </label>
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit" className="w-100">
                    Register
                </Button>
                <p>
                    already have an account ?{" "}
                    <span className="text-primary " onClick={navigateToLogin} style={{ cursor: "pointer" }}>
                        Please login
                    </span>
                </p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
