import blank_profile from "../../blank-profile-picture-female.png";
import "./wilder.css";
import { Skill } from "../skill/skill";
import { Card } from "react-bootstrap";

export const Wilders = ({ data }) => {
    return (
        <Card className="shadow-sm bg-white rounded">
            <Card.Img src={data.image} alt="Jane Doe Profile" />
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
    );
}
export default Wilders;