import "./Skill.css";
import PropTypes from "prop-types";
import { Badge } from "../../style/elements";

export const Skill = ({ title, count }) => {
    return (
        <li>
            {title}
            <Badge count={count} key={title}>{count}</Badge>
        </li>
    );
};

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number
};

export default Skill;