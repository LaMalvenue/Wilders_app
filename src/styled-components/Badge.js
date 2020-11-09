import styled from "styled-components";
import Header from "./Header";

export const Badge = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${({ votes }) => votes > 10 ? 'rgba(0, 0, 0, .9)' : 'rgba(0, 0, 0, .3)'}; 
    color: #FFF;
    border-radius: 9999px;
    height: 20px;
    width: 20px; 
    `;

export default Badge;