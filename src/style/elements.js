import styled, {keyframes} from "styled-components";
import { colors } from "./globals";

export const Header = styled.header`
    background-color: ${colors.primary};
    color: #fff;
    padding: 1.5rem;
`;

export const Footer = styled.footer`
    border-top: 2px solid ${colors.primary};
    text-align: center;
`;

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
