import React, {Component} from 'react';
import {Container, Row, Col, Media, Button, Card, ListGroup} from "react-bootstrap";
class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={'9'}>
                        <Media className={'m-5'}>
                            <img
                                width={'150'}
                                height={'150'}
                                className={'mr-3'}
                                src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
                                alt={'blog post'}
                            />
                            <Media.Body>
                                <h5 className={'mt-2'}>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at
                                    cupiditate distinctio eaque eius error ex, expedita magni officia officiis quae
                                    recusandae sint tempora ullam unde vel voluptates!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className={'m-5'}>
                            <img
                                width={'150'}
                                height={'150'}
                                className={'mr-3'}
                                src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
                                alt={'blog post'}
                            />
                            <Media.Body>
                                <h5 className={'mt-2'}>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at
                                    cupiditate distinctio eaque eius error ex, expedita magni officia officiis quae
                                    recusandae sint tempora ullam unde vel voluptates!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className={'m-5'}>
                            <img
                                width={'150'}
                                height={'150'}
                                className={'mr-3'}
                                src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
                                alt={'blog post'}
                            />
                            <Media.Body>
                                <h5 className={'mt-2'}>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at
                                    cupiditate distinctio eaque eius error ex, expedita magni officia officiis quae
                                    recusandae sint tempora ullam unde vel voluptates!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className={'m-5'}>
                            <img
                                width={'150'}
                                height={'150'}
                                className={'mr-3'}
                                src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
                                alt={'blog post'}
                            />
                            <Media.Body>
                                <h5 className={'mt-2'}>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at
                                    cupiditate distinctio eaque eius error ex, expedita magni officia officiis quae
                                    recusandae sint tempora ullam unde vel voluptates!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className={'m-5'}>
                            <img
                                width={'150'}
                                height={'150'}
                                className={'mr-3'}
                                src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
                                alt={'blog post'}
                            />
                            <Media.Body>
                                <h5 className={'mt-2'}>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at
                                    cupiditate distinctio eaque eius error ex, expedita magni officia officiis quae
                                    recusandae sint tempora ullam unde vel voluptates!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className={'m-5'}>
                            <img
                                width={'150'}
                                height={'150'}
                                className={'mr-3'}
                                src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
                                alt={'blog post'}
                            />
                            <Media.Body>
                                <h5 className={'mt-2'}>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at
                                    cupiditate distinctio eaque eius error ex, expedita magni officia officiis quae
                                    recusandae sint tempora ullam unde vel voluptates!
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md={'3'}>
                        <h5 className={'text-center mt-4'}>Categories</h5>
                        <Card>
                            <ListGroup variant={'flush'}>
                                <ListGroup.Item>HTML</ListGroup.Item>
                                <ListGroup.Item>CSS</ListGroup.Item>
                                <ListGroup.Item>JS</ListGroup.Item>
                                <ListGroup.Item>React.js</ListGroup.Item>
                                <ListGroup.Item>React Native</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className={'mt-3'} bg={'light'}>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at
                                    cupiditate distinctio eaque eius error!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;