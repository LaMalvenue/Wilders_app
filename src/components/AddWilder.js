import React, {useCallback, useState} from 'react';
import {FormGroup, Row} from 'react-bootstrap';
import axios from "axios";
import {ReactComponent as LoadingIcon} from "../img/arrows.svg";
import {Button, Form, FormSkill, Input, Error} from "../style/form-elements";
import Skill from "./Skill/Skill";
import Col from "react-bootstrap/Col";
import {useAddForm} from "../providers/FormContext";
import {useWilders} from "../providers/WildersContext";

export const AddWilder = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [skills, setSkills] = useState([]);
    const [skillName, setSkillName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [delayed, setDelayed] = useState(false);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const {update} = useWilders();
    const {toggle} = useAddForm();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            setDelayed(true);
            setLoading(true);
            setTimeout(() => setDelayed(false), 1000);
            const response = await axios.post('http://127.0.0.1:5000/api/wilder', {name, city, skills});
            await update();

            toggle();
            if (response.data.success) {
                setError("");
                setName("");
                setCity("");
            }
        } catch (e) {
            if (e.response) {
                setError(e.response.data.message);
            } else {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitSkill = async event => {
        event.preventDefault();
        skills.push({title: skillName});
        await setSkills(skills);
        setSkillName("");
        forceUpdate();
    };

    const deleteSkill = (title) => {
        setSkills(skills.filter(skill => skill.title !== title))
    }

    return (
        <div>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={name} onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="city"
                                type="text"
                                placeholder="City"
                                value={city} onChange={e => setCity(e.target.value)}
                            />
                        </FormGroup>
                        {
                            error !== "" && <Error>{error}</Error>
                        }
                        <FormGroup>
                            <Button
                                type="submit"
                                disabled={loading}
                                showLoading={loading && !delayed}
                            >
                                {loading && !delayed ? <LoadingIcon/> : "Ajouter"}
                            </Button>

                        </FormGroup>
                    </Form>
                </Col>
                <Col>
                    <FormSkill onSubmit={handleSubmitSkill}>
                        <FormGroup>
                            <Input
                                id="skill"
                                type="text"
                                value={skillName}
                                placeholder="Nouveau skill"
                                onChange={e => setSkillName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">
                                Ajouter
                            </Button>
                        </FormGroup>
                    </FormSkill>
                    {
                        skills.map((skill, i) => <Skill title={skill.title} key={i} onSkillDelete={deleteSkill}/>)
                    }
                </Col>
            </Row>
        </div>
    )
}