import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import axios from "axios";
import { ReactComponent as LoadingIcon } from "../img/arrows.svg";
import { Button, Form, Input } from "../style/form-elements";

export const AddWilder = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [delayed, setDelayed] = useState(false);

    const saveWilder = async () => {
        try {
            setDelayed(true)
            setLoading(true);
            setTimeout(() => setDelayed(false), 1000);
            const result = await axios.post('http://127.0.0.1:5000/api/wilder', {name, city});
            if (result.data.success) {
                setError("");
            }
            console.log(result);
            alert(`Wilder saved !`);
        } catch (e) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    const submit = async event => {
        event.preventDefault();


        console.log(name, city);

        if(name.trim().length === 0 || city.trim().length === 0) {
            setError('Name and city are required');
            return;
        }
        setError(undefined);
        await saveWilder();
        setName("");
        setCity("");
    };

    return (
        <div>
            <Form onSubmit={submit}>
                <FormGroup>
                    <Input id="name" type="text" placeholder="Name" value={name} onChange={ e => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Input id="city" type="text" placeholder="City" value={city} onChange={ e => setCity(e.target.value)}/>
                </FormGroup>
                { error && <p>{error}</p> }
                <FormGroup>
                    <Button
                        variant="dark"
                        className="button"
                        type="submit"
                    >
                        {loading && !delayed ? <LoadingIcon /> : "Ajouter"}
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}