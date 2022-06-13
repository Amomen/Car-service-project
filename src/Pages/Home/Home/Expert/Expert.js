import React from "react";
import "./Expert.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Expert = ({ expert }) => {
    const { id, name, img } = expert;
    return (
        <div className="col-12 col-md-6 col-lg-4 g-5 cards">
            <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Expert;
