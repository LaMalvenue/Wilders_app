import "./Skill.css";
import PropTypes from "prop-types";
import { Badge } from "../../styled-components/Badge";

export const Skill = ({ name, votes }) => {
    return (
        <li>
            {name}
            <Badge votes={votes}>{votes}</Badge>
        </li>
    );
};

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};

export default Skill;