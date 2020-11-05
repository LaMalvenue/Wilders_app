import "./skill.css";
import PropTypes from "prop-types";
import styled from "styled-components";

const Badge = styled.span`
        /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

     /* Colors */
    background-color: ${({ votes }) => votes > 10 ? 'rgba(0, 0, 0, .9)' : 'rgba(0, 0, 0, .3)'}; 
    color: #FFF;

     /* Rounded border */
    border-radius: 9999px;
    height: 20px;
    width: 20px; 
    `;

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