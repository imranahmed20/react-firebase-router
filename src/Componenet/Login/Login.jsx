import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../Firebase/firebase.init';
const Login = () => {
    const auth = getAuth(app)
    const [login, setLogin] = useState()
    const handleSignEmailAndPassword = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const signUser = result.user;
                console.log(signUser)
            })
            .catch(error => {
                console.log(error.massage)
            })
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center text-danger'>Please Login</h2>
            <Form onSubmit={handleSignEmailAndPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;