import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb ,Modal } from 'react-bootstrap';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "",
            show:false
        };
        this.setTitle = this.setTitle.bind(this);
        this.setTitleValue = this.setTitleValue.bind(this);
        this.setName = this.setName.bind(this);
        this.setNameValue = this.setNameValue.bind(this);
        this.handleClose= this.handleClose.bind(this);
    }

    setShow(value){
        this.setState({
            show: value
        })   
    }

    setTitleValue(e) {
        this.setState({
            title: e.target.value
        })
    }

    setTitle() {
        this.props.setTitle(this.state.title)
    }

    setNameValue(e) {
        this.setState({
            name: e.target.value
        })
    }

    setName() {
        this.props.setName(this.state.name)
    }

    handleClose(){
        this.props.history.push("login");
    }

    componentDidMount() {
        if (!this.props.login) {
            this.setShow(true);
        }
    }


    render() {
        return (
            <div>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#login">Login</Breadcrumb.Item>
                        <Breadcrumb.Item href="#dashboard">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" active>{this.props.title} - {this.props.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form>
                        <Row>
                            <Col><Form.Group controlId="formBasicEmail">
                                <Form.Label>App Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter New Title" onChange={this.setTitleValue} value={this.state.title} />
                                <Form.Text className="text-muted" >
                                    Please set new title.
                            </Form.Text>
                            </Form.Group></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" onClick={this.setTitle} type="button">Set Title</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col><Form.Group controlId="formBasicEmail">
                                <Form.Label>App Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter New Nametle" onChange={this.setNameValue} value={this.state.name} />
                                <Form.Text className="text-muted" >
                                    Please set new name.
                            </Form.Text>
                            </Form.Group></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" onClick={this.setName} type="button">Set Name</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Security Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you need to login!</Modal.Body>
                    <Modal.Footer> 
                        <Button variant="primary" onClick={this.handleClose}>
                           OK
                       </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    setTitle: title => dispatch({ type: "SET_TITLE", title }),
    setName: name => dispatch({ type: "SET_NAME", name })
})

const mapStateToProps = (state) => {
    const { dashboard, app } = state
    return { username: app.username, login: app.login, name: dashboard.name, title: app.title }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));