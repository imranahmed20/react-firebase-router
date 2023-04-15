import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../Firebase/firebase.init';

const Register = () => {
    const auth = getAuth(app)

    const [register, setRegister] = useState('')
    const [logError, setLogError] = useState('')
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const logUser = result.user;
                setRegister(logUser)
            })
            .catch(error => {
                setLogError(error.message)
                console.log(error.message)
            })
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center text-danger'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-danger'>{logError}</p>
        </div>
    );
};

export default Register;