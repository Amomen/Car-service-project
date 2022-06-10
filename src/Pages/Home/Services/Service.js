import React from "react";
import "./Service.css";
const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>
                <small>{description}</small>
            </p>
            <button>Book your Service</button>
        </div>
    );
};

export default Service;
