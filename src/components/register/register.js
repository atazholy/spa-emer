import React from "react";

import { Row, Col, Form, Card, Button } from "react-bootstrap";
import "./register.css";

export default class Register extends React.Component {
  render() {
    return (
      <Row className="row-h100">
        <Col md={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Header className="text-center font-weight-bold text-uppercase bg-primary text-white">
              Регистрация
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="login">
                  <Form.Label>Логин</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Логин" />
                  <Form.Text className="text-muted">
                    Для входа прокси сервера
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Электронный адрес</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Электронный адрес"
                  />
                </Form.Group>

                <Form.Group controlId="surname">
                  <Form.Label>Фамилия Имя Отчество</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Фамилия Имя Отчество"
                  />
                </Form.Group>

                <Button
                  className="float-right btn-sm"
                  variant="primary"
                  type="submit"
                >
                  Сохранить
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
