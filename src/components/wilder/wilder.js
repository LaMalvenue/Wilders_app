
import blank_profile from "../../blank-profile-picture-female.png";
import "./wilder.css";
import { Skill } from "../skill/skill";

export const Wilder = () => {
    const skills = [
        { name: "HTML", votes: 5},
        { name: "CSS", votes: 8},
        { name: "JS", votes: 3},
        { name: "Java", votes: 7},
        { name: "PHP", votes: 9}
    ]
    

    return (
        <article className="card">
            <img src={blank_profile} alt="Jane Doe Profile" />
            <h3>Jane Doe</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <ul className="skills">
                {
                    skills.map(({name, votes}, index) => <Skill name={name} votes={votes} key={index}/>)
                }
            </ul>
        </article>
    );
};