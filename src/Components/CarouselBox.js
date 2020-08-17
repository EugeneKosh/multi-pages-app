import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import earlySky from '../assets/earlySky.jpg'
import nightSky from '../assets/nightSky.jpg'
import starSky from '../assets/starSky.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className={'d-block w-100'}
                        src={earlySky}
                        alt={'Sky'}
                    />
                    <Carousel.Caption>
                        <h3>Sky image</h3>
                        <p>Lorem ipsum dolor, sit amet consecteur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={'d-block w-100'}
                        src={nightSky}
                        alt={'Sky'}
                    />
                    <Carousel.Caption>
                        <h3>Night sky image</h3>
                        <p>Lorem ipsum dolor, sit amet consecteur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={'d-block w-100'}
                        src={starSky}
                        alt={'Sky'}
                    />
                    <Carousel.Caption>
                        <h3>Star sky image</h3>
                        <p>Lorem ipsum dolor, sit amet consecteur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;