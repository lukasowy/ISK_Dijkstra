import React, { Component } from 'react';
import Menu from './menu/Menu';
import Dijkstra from './Dijkstra'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Dijkstra/>
      </div>
    );
  }
}

export default App;
