import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Services:{serviceId}</h2>
            <Link to="/checkout"></Link>
            <div className="text-center">
                <button className="btn btn-primary">proceed checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetails;
