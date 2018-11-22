import React from 'react';
import './Menu.css';
import TypeManually from './TypeManually'

class Menu extends React.Component {

    render() {
        return (
            <div className="sidenav">
                <TypeManually/>
            </div>
        );
    }
}

export default Menu