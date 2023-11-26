'use client'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import singIn from '../action/login';
import { useState } from 'react';
import { redirect } from 'next/navigation';

export default function LoginForm() {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handlerSubmit = (e: any) => {
        e.preventDefault()
        singIn(username, password)
    }

  return (
    <Container className='m-auto p-20'>
        <Row>
            <Col className='m-auto p-3 border border-secondary rounded' xs={12} md={6}>
        <Form onSubmit={ handlerSubmit } id='loginForm'>
        <Form.Group className="mb-3">
            <Form.Label>Login</Form.Label>
            <Form.Control placeholder="Enter login" value={ username } onChange={(e) => setUsername(e.target.value) }/>
            <Form.Text className="text-muted">
            Well never share your login with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
                value={ password }
                onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="secondary" type='submit'>
            SingIn
        </Button>
        <Button variant="secondary" className='ms-3'
            onClick={() => window.location.replace('/registration')}>
            SingUp
        </Button>
        </Form>
            </Col>
        </Row>
    </Container>
  );
}
