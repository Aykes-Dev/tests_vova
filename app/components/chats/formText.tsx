import * as React from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import sendMessage from '../action/sendMessage';

export default function FormInputMessage(props: any) {
    const [text, setText] = React.useState('')

    const handelSubmit = (e: any) => {
        sendMessage(text, props.id)
        e.preventDefault()
        setText('')
    }

    return (
        <Form onSubmit={ handelSubmit }>
            <Row className='m-auto'>
                <Col xs={8} sm={8} lg={10} xl={10}>
                    <Form.Control type="text"
                        placeholder="Enter text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        />
                </Col>
                <Col>
                    <Button type="submit">Send</Button>
                </Col>
            </Row>
        </Form>
    );
}