import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    console.log(service);
    const navigate = useNavigate();
    const handleNavigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    };
    // const {service} = props;
    return (
        <div className="service rounded mb-5">
            <img className="rounded" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <button onClick={() => handleNavigateToServiceDetail(_id)} className="btn btn-info w-100">
                {name}
            </button>
        </div>
    );
};

export default Service;
