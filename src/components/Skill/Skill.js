import "./Skill.css";
import PropTypes from "prop-types";
import { Badge } from "../../styled-components/Badge";

export const Skill = ({ title, count }, index) => {
    return (
        <li>
            {title}
            <Badge count={count} key={index}>{count}</Badge>
        </li>
    );
};

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number
};

export default Skill;