import React from 'react';
import { Form, FormGroup, Container, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';

class TypeManually extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
        console.log(e)
        e.preventDefault();
    }

    render() {
        return (
            <Container>
            <Form onSubmit={this.handleSubmit}>
                
                <FormGroup >
                    <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">X</InputGroupAddon>
                        <Input placeholder="" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">Y</InputGroupAddon>
                        <Input placeholder="" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </InputGroup>

                </FormGroup>

                <Button >Add</Button>
            </Form>
            </Container>
        );
    }
}

export default TypeManually