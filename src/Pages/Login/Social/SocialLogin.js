import React from "react";
import google from "../../../images/logo/google.png";
import facebook from "../../../images/logo/facebook.png";
import github from "../../../images/logo/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle(auth);
        if (loading) {
            <p>Loading....</p>;
        } else {
            navigate("/home");
        }
    };

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-1 px-2">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            <div>
                <button onClick={handleGoogleSignIn} className=" border-success btn btn-light d-block mx-auto w-50">
                    <img className="ms-auto" style={{ width: "30px" }} src={google} alt="" />
                    <span className="px-2 text-success">Google Sign In</span>
                </button>
            </div>
            <div className="mt-2">
                <button className="btn btn-primary d-block mx-auto w-50">
                    <img className="ms-auto" style={{ width: "30px" }} src={facebook} alt="" />
                    <span className="px-2">Facebook Sign In</span>
                </button>
            </div>
            <div className="mt-2">
                <button className="btn btn-dark d-block mx-auto w-50">
                    <img className="ms-auto" style={{ width: "30px" }} src={github} alt="" />
                    <span className="px-2">Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
