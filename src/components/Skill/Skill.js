import "./Skill.css";
import PropTypes from "prop-types";
import { Badge } from "../../style/elements";
import {ButtonSkill} from "../../style/form-elements";

export const Skill = ({ title, count, onSkillDelete }) => {
    return (
        <ul>
        <li>
            {title}
            <Badge count={count} key={title}>{count}</Badge>
            <ButtonSkill onClick={() => onSkillDelete(title)}>x</ButtonSkill>
        </li>
      </ul> 
    );
};

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number
};

export default Skill;