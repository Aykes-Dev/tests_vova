'use client'

import * as React from 'react';
import { redirect } from 'next/navigation';
import NavBar from '../components/navbar/NavBar'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputFileUpload from '@/app/components/upload';
import createCat from '@/app/components/action/createCat';
import registration from '../components/action/registration';

export default function CreateCat(props: any) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [retryPassword, setPetryPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
                                    <Button onClick={() => registration(
                                        name,
                                        password,
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