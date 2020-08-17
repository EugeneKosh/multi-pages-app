import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className={'text-center m-4'}>Our team</h2>
                    <CardDeck className={'m-4'}>
                        <Card>
                            <Card.Img variant={'top'} src={'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
                            <Card.Body>
                                <Card.Title>Lorem.</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cum cupiditate, deserunt dignissimos doloremque eaque eligendi error esse excepturi fugiat itaque necessitatibus officiis perferendis perspiciatis sapiente suscipit totam, vitae!</Card.Text>
                                <Button varian={'primary'}>About Lorem</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={'top'} src={'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                            <Card.Body>
                                <Card.Title>Lorem.</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cum cupiditate, deserunt dignissimos doloremque eaque eligendi error esse excepturi fugiat itaque necessitatibus officiis perferendis perspiciatis sapiente suscipit totam, vitae!</Card.Text>
                                <Button varian={'primary'}>About Lorem</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={'top'} src={'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                            <Card.Body>
                                <Card.Title>Lorem.</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cum cupiditate, deserunt dignissimos doloremque eaque eligendi error esse excepturi fugiat itaque necessitatibus officiis perferendis perspiciatis sapiente suscipit totam, vitae!</Card.Text>
                                <Button varian={'primary'}>About Lorem</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={'top'} src={'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                            <Card.Body>
                                <Card.Title>Lorem.</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cum cupiditate, deserunt dignissimos doloremque eaque eligendi error esse excepturi fugiat itaque necessitatibus officiis perferendis perspiciatis sapiente suscipit totam, vitae!</Card.Text>
                                <Button varian={'primary'}>About Lorem</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default Home;