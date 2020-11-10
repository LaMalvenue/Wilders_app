import "./Wilder.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../../img/profile.png";
import { Card } from 'react-bootstrap';
import { Skill } from "../Skill/Skill";

export function Wilder({ city, name, skills }) {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div>
            <Card className="shadow-sm bg-white rounded">
                <Card.Img variant="top" src={image} alt={`${name} Profile`} />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-beetween">
                        <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
                    </div>
                    <h4>City</h4>
                    <p>{city}</p>
                    <Card.Text className="text-secondary">
                        {description}
                    </Card.Text>
                    <h3>Wild Skills</h3>
                    <ul className="skills">
                        { skills.map((skill) =>  <Skill key={skill._id} {...skill} />) }
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
};