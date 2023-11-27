'use client'

import * as React from 'react';
import { redirect } from 'next/navigation';
import NavBar from '../../components/navbar/NavBar'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputFileUpload from '@/app/components/upload';
import createCat from '@/app/components/action/createCat';

export default function CreateCat(props) {
    const [name, setName] = useState('')
    const [birth_year, setBirthYear] = useState('')
    const [color, setColor] = useState('')
    const [breed, setBreed] = useState('')
    const [history, setHistory] = useState('')
    const [image, setImageFile] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        else {
            redirect('/')
        }
    }, []);

    return (
        <main className="items-center justify-between vh-100">
            <NavBar auth={isAuthenticated} />
            <Container className='pt-5'>
                <Row>
                    <Col className='ps-3'>
                        <h1>Добавить кота</h1>
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
                                        label="Кличка"
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
                                        label="Год рождения"
                                        defaultValue=""
                                        onChange={(e) => setBirthYear(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Окрас"
                                        defaultValue=""
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Порода"
                                        defaultValue=""
                                        onChange={(e) => setBreed(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Описание"
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                        onChange={(e) => setHistory(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row className='m-auto'>
                                <Col xs={2} className='m-auto'>
                                    <InputFileUpload onChange={file => {
                                        setImageFile(file)
                                    }} /></Col>
                            </Row>
                            <Row>
                                <Col xs={2} className='m-auto'>
                                    <Button onClick={() => createCat(
                                        {
                                            name,
                                            birth_year,
                                            color,
                                            breed,
                                            history,
                                            image
                                        }
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
