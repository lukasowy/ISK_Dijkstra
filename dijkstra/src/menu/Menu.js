import React from 'react';
import './Menu.css';
import TypeManually from './TypeManually'
import { Badge, Col } from 'reactstrap';

class Menu extends React.Component {

    render() {
        return (
            <div className="sidenav">
                <Col sm="12" sm={{ size: 6, offset: 2 }}>
                    <h1> <Badge color="secondary">Dijkstra</Badge></h1>
                </Col>
                <TypeManually />
            </div>
        );
    }
}

export default Menu