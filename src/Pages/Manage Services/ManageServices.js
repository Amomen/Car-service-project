import React from "react";
import useServices from "../../useServices/UseServices";

const ManageServices = () => {
    const [services, setServices] = useServices();
    console.log(services);
    const deleteData = (id) => {
        const proceed = window.confirm("Are you sure you want to deleteData  ?");
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = services.filter((sheba) => sheba._id !== id);
                    setServices(remaining);
                });
        }
    };
    return (
        <div className="w-50 mx-auto">
            <h2>Manage your Services</h2>
            {services.map((sheba) => (
                <div key={sheba._id}>
                    <h4>
                        {sheba.name} <button onClick={() => deleteData(sheba._id)}>X</button>
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default ManageServices;
