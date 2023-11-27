'use client'

import * as React from 'react';
import NavBar from '../components/navbar/NavBar'
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import registration from '../components/action/registration';

export default function CreateCat() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [retryPassword, setPetryPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const verifyOrRegistration = (name: any, password: any, retryPassword: any, email: any) => {
        if (password === retryPassword) {
            registration(name, password, email)
        }else {
            alert('Пароли не совпадают.')
        }
    }

    return (
        <main className="items-center justify-between vh-100">
            <NavBar auth={isAuthenticated} />
            <Container className='pt-5'>
                <Row>
                    <Col className='ps-3'>
                        <h1>Регистрация</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '48vh' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Логин"
                                        defaultValue=""
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Пароль"
                                        defaultValue=""
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Повторите пароль"
                                        defaultValue=""
                                        onChange={(e) => setPetryPassword(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Электронаня почта"
                                        defaultValue=""
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Col>
                            </Row>                                  
                            <Row>
                                <Col xs={2} className='m-auto'>
                                    <Button onClick={() => verifyOrRegistration(
                                        name,
                                        password,
                                        retryPassword,
                                        email
                                    )}
                                        className='mt-4 ms-5'>
                                        Создать
                                    </Button>
                                </Col>
                            </Row>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}