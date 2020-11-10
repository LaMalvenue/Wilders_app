import styled, {keyframes} from "styled-components";
import Header from "./Header";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonLoader = styled.span`
    background-color: ${({showLoading}) => showLoading ? "#fff" : "transparent"};
    color: #fff;
    padding: 0.5em 1em;
    border-radius: 4px;
    display: inline-block;
    ${focus}
    svg {
    width: 47px !important;
    height: 47px !important;
    animation: ${rotate} 2s linear infinite;
    animation-play-state: running !important;
  }
    `;

export default ButtonLoader;