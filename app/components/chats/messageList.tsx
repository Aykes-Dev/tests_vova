import { List, Box, Paper } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import getMessage from "../action/getMessage";
import useSWR from "swr";

export default function MessageList(props: any) {
    //const { data, error, isLoading }  = useSWR(`/api/${props.id}/messages/`, getMessage)
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const interval = setInterval(async () => {
            if (props.id) {
                setMessages(await getMessage(`/api/${props.id}/messages/`))
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [props.id])


    return (
        <List>
            {props.id ? messages?.map((message: any) => (
                <Box key={message.id}>
                    <Paper
                        className={message.sender === props.name ? 'p-3 w-75 mb-3' : 'p-3 text-end w-75 me-0 ms-auto mb-3'}
                        elevation={12}>
                        {message.text}
                    </Paper>
                </Box>
            )) :
                <Row>
                    <Col xs={3} className='m-auto'> Выберите чат. </Col>
                </Row>
            }
        </List>
    )
}