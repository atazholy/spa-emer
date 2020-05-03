import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import "./login.css";

export default class Login extends Component {
  render() {
    return (
      <Row className="row-h100">
        <Col md={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Header className="text-center font-weight-bold text-uppercase bg-primary text-white">
              Авторизация
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email адрес</Form.Label>
                  <Form.Control type="email" size="sm" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    size="sm"
                    placeholder="Пароль"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Запомнить" />
                </Form.Group>
                <Button
                  className="float-right btn-sm"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
