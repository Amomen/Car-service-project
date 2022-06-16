import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./Social/SocialLogin";

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail();
    const [signInWithEmailAndPassword, user, loading, error1] = useSignInWithEmailAndPassword(auth);

    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        <p>Loading....</p>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error1) {
        errorElement = <p className="text-danger">Error: {error1?.message}</p>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    const navigateRegister = (event) => {
        navigate("/register");
    };

    return (
        <div className="container w-50 mx-auto">
            <h2 className="text-primary text-center mt-2">Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>
                New to Genius Car?{" "}
                <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>
                    Please Register
                </Link>{" "}
            </p>
            <p>
                Forgot Password ?{" "}
                <Link
                    to="/register"
                    className="text-primary pe-auto text-decoration-none"
                    onClick={async () => {
                        await sendPasswordResetEmail(emailRef);
                        alert("Sent email");
                    }}
                >
                    Send Reset Email
                </Link>{" "}
            </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
