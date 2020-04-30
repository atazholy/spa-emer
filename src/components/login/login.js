import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Row, Col, Form, Card, Button } from 'react-bootstrap'
import './login.css'


export default class Login extends Component {

    render() {
        return (

            <Row className="rh100" >
                <Col md={{ span: 4, offset: 4 }}>
                    <Card>
                        <Card.Header className="text-center font-weight-bold text-uppercase bg-primary text-white">Авторизация</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email адрес</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                    {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
          </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Пароль" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button className="sButton" variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>



        );
    }

}
