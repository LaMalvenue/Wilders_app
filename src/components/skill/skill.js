import "./skill.css";
import PropTypes from "prop-types";

export const Skill = props => {
    return (
        <li>
            {props.name}
            <span className="votes">{props.votes}</span>
        </li>
    );
};

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};

export default Skill;