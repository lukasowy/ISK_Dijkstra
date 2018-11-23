import React from 'react';
import { Form, FormGroup, Container, Input, Button, InputGroup, InputGroupAddon, Label, FormText, Row, Col } from 'reactstrap';

class TypeManually extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    handleChange = e => {
        this.setState({ value: e.target.value });
        console.log(this.state.value)
    }

    handleSubmit = e => {
        console.log(e)
        e.preventDefault();
    }
    divStyle = {
        fontSize: '15px',
    };
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup >
                        <InputGroup size="sm">
                            <InputGroupAddon addonType="prepend">X</InputGroupAddon>
                            <Input placeholder="" type="number" min="0" step="1" value={this.state.value} onChange={this.handleChange} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup size="sm">
                            <InputGroupAddon addonType="prepend">Y</InputGroupAddon>
                            <Input placeholder="" type="number" min="0" step="1" value={this.state.value} onChange={this.handleChange} />
                        </InputGroup>
                    </FormGroup>
                    <FormText color="muted">
                        Type Nodes from and to.
                        </FormText>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={this.divStyle} className="text-muted" for="exampleCity">Node from:</Label>
                                <Input type="number" min="0" step="1" name="city" id="exampleCity" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={this.divStyle} className="text-muted" for="exampleState">Node to:</Label>
                                <Input type="number" min="0" step="1" name="state" id="exampleState" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup >
                        <FormText color="muted">
                            Load the graph from the device.
                        </FormText>
                        <Label style={this.divStyle} for="exampleFile">File</Label>
                        <Input style={this.divStyle} type="file" name="file" id="exampleFile" />
                    </FormGroup>
                    <Button >Start</Button>
                </Form>
            </Container>
        );
    }
}

export default TypeManually