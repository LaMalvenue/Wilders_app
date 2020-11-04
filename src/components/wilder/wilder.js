import "./wilder.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Skill } from "../skill/skill";

export function Wilder({ data }) {
    const skills = data.skills;
    return (
        <div>
            <Card className="shadow-sm bg-white rounded">
                <Card.Img variant="top" src={data.image} alt={data.name} />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-beetween">
                        <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    </div>
                    <Card.Text className="text-secondary">
                        {data.description}
                    </Card.Text>
                    <h3>Wild Skills</h3>
                    <ul className="skills">
                        {
                            skills.map(({name, votes}, index) => <Skill name={name} votes={votes} key={index}/>)
                        }
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
};