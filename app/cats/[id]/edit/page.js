'use client'

import * as React from 'react';
import { redirect, useParams } from 'next/navigation';
import NavBar from '../../../components/navbar/NavBar';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputFileUpload from '@/app/components/upload';
import { CardMedia } from '@mui/material';
import editCat from '@/app/components/action/editCat';

export default function EditCat(props) {
    const [name, setName] = useState(localStorage.getItem('name'))
    const [birth_year, setBirthYear] = useState(localStorage.getItem('birth_year'))
    const [color, setColor] = useState(localStorage.getItem('color'))
    const [breed, setBreed] = useState(localStorage.getItem('breed'))
    const [history, setHistory] = useState(localStorage.getItem('history'))
    const [image, setImageFile] = useState(localStorage.getItem('image'))
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const params = useParams()

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
                        <h1>Редактировать кота</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50vh' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Row>
                                <Col xs={12} sm={12} md={6} className='m-auto'>
                                    <CardMedia
                                        component="img"
                                        alt={name}
                                        
                                        image={image}
                                        style={{ minHeight: 250, maxHeight: 250, minWidth: 180 }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5} className='m-auto'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Кличка"
                                        defaultValue={name}
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
                                        defaultValue={birth_year}
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
                                        defaultValue={color}
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
                                        defaultValue={breed}
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
                                        defaultValue={history}
                                        onChange={(e) => setHistory(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col xs={3} className='m-auto'>
                                    <InputFileUpload onChange={(file) => {
                                        setImageFile(file)
                                    }} /></Col>
                            </Row>
                            <Row>
                                <Col xs={2} className='m-auto'>
                                    <Button onClick={() => editCat(
                                        {
                                            name,
                                            birth_year,
                                            color,
                                            breed,
                                            history,
                                            image,
                                            id: params.id
                                        }
                                    )}
                                        className='m-auto'>
                                        Редактировать
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
