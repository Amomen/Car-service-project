import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
    return (
        <div>
            <h2>You are about to book :{service.name}</h2>
            <Link to="/checkout"></Link>
            <div className="text-center">
                <button className="btn btn-primary">proceed checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetails;
