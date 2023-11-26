'use client'

import Container from "react-bootstrap/esm/Container";
import NavBar from "../components/navbar/NavBar";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import UserList from "../components/chats/userList";
import styles from '../components/chats/userList.module.css';
import MessageList from "../components/chats/messageList";
import FormInputMessage from "../components/chats/formText";
import { useState, useEffect } from 'react'
import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import BasicModal from "../components/modal/modal";


export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [idChat, setIdChat] = useState()
    const [name, setName] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        else {
            redirect('/')
        }
    }, []);

    const setUser = (id: any, name: any) => {
        setIdChat(id)
        setName(name)
    }

    return (
        <main className="items-center justify-between vh-100">
            <NavBar auth={isAuthenticated} />
            <Container className="mt-4">
                <Row className={styles.row_users_chat}>
                    <Col xs={5} md={4} lg={3} className={styles.users} >
                        <UserList func={setUser} />
                        <BasicModal />
                    </Col>
                    <Col>
                        <Row className={styles.row_messages}>
                            <Col className={styles.messsges}>
                                <MessageList id={idChat} name={name}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormInputMessage id={idChat}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </main>
    )
}