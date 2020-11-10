import "./Skill.css";
import PropTypes from "prop-types";
import { Badge } from "../../styled-components/Badge";

export const Skill = ({ title, count }) => {
    return (
        <li>
            {title}
            <Badge votes={count} key={title}>{count}</Badge>
        </li>
    );
};

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};

export default Skill;