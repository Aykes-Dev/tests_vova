'use client'

import { redirect } from 'next/navigation';
import NavBar from '../components/navbar/NavBar'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Grid from '@mui/material/Unstable_Grid2';
import getCats from '../components/action/getCats';
import useSWR from 'swr'
import ImgMediaCard from '../components/card';
import Icons from '../components/icons';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { data, error, isLoading }  = useSWR('/api/cats', getCats)
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
        <main className="items-center justify-between">
            <NavBar auth={isAuthenticated} />
            <Container className='p-5'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data?.results.map((cat: any) => (
                        <Grid xs={2} sm={4} md={4} key={cat.id}>
                            <ImgMediaCard cat={cat}/>
                        </Grid>
                    ))}
                </Grid>
                <Icons />
            </Container>

        </main>
    )
}