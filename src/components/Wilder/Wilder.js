import "./Wilder.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../../img/profile.png";
import { Card ,Button} from 'react-bootstrap';
import { Skill } from "../Skill/Skill";
import {ListSkills} from "../../style/elements";

export const Wilder = props => {

    return (
      <div>
        <Card className="shadow-sm bg-white rounded">
          <Card.Img variant="top" src={image} alt={`${props.name} Profile`} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
              <Card.Title className="mb-0 font-weight-bold">{props.name}</Card.Title>
            </div>
            <Card.Text className="text-secondary">Ville : {props.city}</Card.Text>
            <h3>Wild Skills</h3>
            <ListSkills>
              {props.skills.map((skill) => (
                <Skill key={skill._id} {...skill} />
              ))}
            </ListSkills>
          </Card.Body>
          <Button onClick={() => props.deleteWilder(props._id)}>Supprimer</Button>
        </Card>
      </div>
    );
};

