import React from "react";

import expert1 from "../../../../images/Experts/expert-1.jpg";
import expert2 from "../../../../images/Experts/expert-2.jpg";
import expert3 from "../../../../images/Experts/expert-3.jpg";
import expert4 from "../../../../images/Experts/expert-4.jpg";
import expert5 from "../../../../images/Experts/expert-5.jpg";
import expert6 from "../../../../images/Experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
    { id: 1, name: " john", img: expert1 },
    { id: 2, name: " will", img: expert2 },
    { id: 3, name: " rock", img: expert5 },
    { id: 4, name: " wyane", img: expert3 },
    { id: 5, name: " jordan", img: expert4 },
    { id: 6, name: " messi", img: expert6 },
];
const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-danger text-center">This is Experts</h2>
            <div className="row">
                {experts.map((expert) => (
                    <Expert key={expert.id} expert={expert}></Expert>
                ))}
            </div>
        </div>
    );
};

export default Experts;
