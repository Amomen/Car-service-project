import React from "react";
import "./NotFound.css";
import notfound from "../../images/404/notfound.jpg";
const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;
