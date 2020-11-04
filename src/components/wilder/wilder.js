import "./wilder.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Skill } from "../skill/skill";
import data from "../../data.json";

export const Wilder = () => {
    const skills = [
        { "name": "HTML", "votes": 5 },
        { "name": "CSS", "votes": 8 },
        { "name": "JS", "votes": 3 },
        { "name": "Java", "votes": 7 },
        { "name": "PHP", "votes": 9 }
    ];
    return (
        <div>
            <Card className="shadow-sm bg-white rounded">
                <Card.Img variant="top" src={data.image} alt="Jane Doe Profile" />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-beetween">
                        <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    </div>
                    <Card.Text className="text-secondary">
                        {data.description}
                    </Card.Text>
                    <Card.Title>Wild Skills</Card.Title>
                    <Card.Text className="skills">
                        {
                            skills.map(({name, votes}, index) => <Skill name={name} votes={votes} key={index}/>)
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};