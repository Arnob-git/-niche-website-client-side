import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {

    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdminData = { ...admin };
        newAdminData[field] = value;
        setAdmin(newAdminData);
    }

    const handleAdmin = e => {
        fetch('https://tranquil-springs-58803.herokuapp.com/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
    }
    return (
        <div style={{ minHeight: '70vh' }}>
            {success && alert('New Admin Successfylly Created...')}
            <Form onSubmit={handleAdmin} style={{ maxWidth: '450px' }}>
                <Form.Label>Email address to make admin</Form.Label>
                <Form.Control required className='mb-5' type="email" name='email' onBlur={handleOnBlur} placeholder="Enter email" />
                <Button variant='info' type='submit'>Make Admin</Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;