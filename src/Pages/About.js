import React, {Component} from 'react';
import {Container, Tab, Row, Col, Nav} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id={'ledt-tabs-example'} defaultActiveKey={'Design'}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant={'pills'} className={'flex-column mt-2'}>
                                <Nav.Item>
                                    <Nav.Link eventKey={'Design'}>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={'Team'}>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={'Programming'}>Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={'Frameworks'}>Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={'Libraries'}>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className={'mt-3'}>
                                <Tab.Pane eventKey={'Design'}>
                                    <img src="https://images.app.goo.gl/5vSqmThNKbxJZKT27" alt="design"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut consectetur consequatur corporis culpa distinctio eligendi in laudantium libero, maxime molestias nulla quas quidem reiciendis tempora tempore voluptas, voluptatibus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Team'}>
                                    <img src="https://images.app.goo.gl/ahTtcUhcXop8LCi77" alt="team"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut consectetur consequatur corporis culpa distinctio eligendi in laudantium libero, maxime molestias nulla quas quidem reiciendis tempora tempore voluptas, voluptatibus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Programming'}>
                                    <img src="https://images.app.goo.gl/T8p2XfH5hCFn3LcPA" alt="programming"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut consectetur consequatur corporis culpa distinctio eligendi in laudantium libero, maxime molestias nulla quas quidem reiciendis tempora tempore voluptas, voluptatibus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Frameworks'}>
                                    <img src="https://images.app.goo.gl/Jvwt4YKEHSrKAm749" alt="frameworks"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut consectetur consequatur corporis culpa distinctio eligendi in laudantium libero, maxime molestias nulla quas quidem reiciendis tempora tempore voluptas, voluptatibus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Libraries'}>
                                    <img src="https://images.app.goo.gl/N5CtwJLcfVmh4uxq6" alt="design"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut consectetur consequatur corporis culpa distinctio eligendi in laudantium libero, maxime molestias nulla quas quidem reiciendis tempora tempore voluptas, voluptatibus.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;