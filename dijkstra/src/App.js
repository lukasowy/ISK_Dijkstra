import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import MyArrow from './shapes/MyArrow'
import Node from './shapes/Node'
import Menu from './Menu';

class App extends Component {
  status = {
    x: 300,
    y: 200
  }
  random = Math.floor((Math.random() * 200) + 1);
  render() {
    return (
      <div>
        <Menu />
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <MyArrow x={this.status.x} y={this.status.y} />
            <Node x={this.status.x + this.random} y={this.status.y} />
            <Node x={this.status.x  + this.random} y={this.status.y + this.random} />
            <Node x={this.status.x} y={this.status.y + this.random} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
