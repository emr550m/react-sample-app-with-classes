import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb } from 'react-bootstrap';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    setUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    setPassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    login() {
        this.props.setLogin(true, this.state.username);
        this.props.history.push("dashboard");
    }

    render() {
        return (
            <div><Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#login">Login</Breadcrumb.Item>
                    <Breadcrumb.Item href="#dashboard">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>{this.props.title} - {this.props.name}</Breadcrumb.Item>
                </Breadcrumb>
                <Form>
                    <Row>
                        <Col><Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={this.setUsername} value={this.state.username} />
                            <Form.Text className="text-muted" >
                                Your Username is important. Do not share to anybody.
                                </Form.Text>
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col> <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.setPassword} value={this.state.password} />
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={this.login} type="button">Login</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setTitle: title => dispatch({ type: "SET_TITLE", title }),
    setLogin: (login, username) => dispatch({ type: "SET_LOGIN", login, username }),
})

const mapStateToProps = (state) => {
    const { dashboard, app } = state
    return { name: dashboard.name, title: app.title }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));