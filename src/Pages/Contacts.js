import React, {Component} from 'react';
import {Container, Form, Button} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '40%'}}>
                <h1 className={'text-center mt-3'}>Contacts us!</h1>
                <Form>
                    <Form.Group controlId={'formBasicEmail'}>
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type={'email'} placeholder={'qwertyuio@gmail.com'} />
                        <Form.Text>We`ll never share your email with anyone else</Form.Text>
                    </Form.Group>

                    <Form.Group controlId={'formBasicTextarea'}>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as={'textarea'} rows={'3'} />
                    </Form.Group>

                    <Form.Group controlId={'formBasicCheckBox'}>
                        <Form.Check type={'checkbox'} label={'Check me out'} />
                    </Form.Group>

                    <Button varian={'primary'} type={'submit'} >Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;