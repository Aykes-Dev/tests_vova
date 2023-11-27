'use client'

import { redirect, useParams } from 'next/navigation';
import NavBar from '../../components/navbar/NavBar'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import getCats from '../../components/action/getCats';
import useSWR from 'swr'
import { CardMedia } from '@mui/material';
import CircularIndeterminate from '@/app/components/loading';
import deleteCats from '@/app/components/action/deleteCat';

export default function CatInfo(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const params = useParams()
    const { data, error, isLoading } = useSWR(`/api/cats/${params.id}/`, getCats)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        else {
            redirect('/')
        }
    }, []);

    const editCat = (param: any, t: any) => {
        localStorage.setItem('name', t.name)
        localStorage.setItem('birth_year', t.birth_year)
        localStorage.setItem('color', t.color)
        localStorage.setItem('breed', t.breed)
        localStorage.setItem('history', t.history)
        localStorage.setItem('image', t.image)
        window.location.replace(`/cats/${param.id}/edit`)
    }

    return (
        <main className="items-center justify-between vh-100">
            <NavBar auth={isAuthenticated} />
            {isLoading ? <CircularIndeterminate /> :
                <Container className='p-5'>
                    <Row>
                        <Col xs={12} md={5} className='mb-3'>
                            <CardMedia
                                component="img"
                                alt={data.name}
                                height="250"
                                width="180"
                                image={data.image}
                                style={{ minHeight: 250, maxHeight: 250, minWidth: 180 }}
                            />
                        </Col>
                        <Col xs={12} md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Button variant='secondary' 
                                        size='sm' onClick={() => editCat(params, data)}>Edit</Button>
                                    <Button variant='secondary' 
                                        size='sm' className='ms-3'
                                        onClick={() => deleteCats(params)}>Delete</Button>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <h4>Кличка: {data.name}</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Год рождения: {data.birth_year}</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-align'>
                                    <h4>Окрас: <div style={{
                                        backgroundColor: data.color,
                                        height: '20px', width: '80px',
                                        display: 'inline-block'
                                    }}></div>
                                    </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Порода: {data.breed}</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={8} className='m-auto'>
                            <h3>История кота</h3>
                            {data.history}
                        </Col>
                    </Row>
                </Container>}
        </main>
    )
}
