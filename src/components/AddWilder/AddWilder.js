import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

export const AddWilder = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('false');

    const saveWilder = async () => {
        await axios.post('http://localhost:3200/api/wilders', {name, city});
        alert(`Wilder savec !`);
    }

    const submit = async event => {
        event.preventDefault();

        if(name.trim().length === 0 || city.trim().length === 0) {
            setError('Name and city are required');
            return;
        }

        saveWilder();
    };

    return (
        <div>
            <Form onSubmit={submit}>
                <input type="text" placeholder="Name" value={name} onChange={ e => setName(e.target.value)}/>
                <input type="text" placeholder="City" value={city} onChange={ e => setCity(e.target.value)}/>
                <Button type="submit">Envoyer</Button>
            </Form>
        </div>
    )
}