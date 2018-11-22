import React from 'react';
import { Circle } from 'react-konva';
import Konva from 'konva';

class Node extends React.Component {
    state = {
        x: this.props.x,
        y: this.props.y,
        color: 'grey'
    };
    handleDragStart = e => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    };
    handleDragEnd = e => {
        e.target.to({
            duration: 1.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5
        });
    };
    render() {
        return (
            <Circle draggable
                x={this.state.x}
                y={this.state.y}
                radius={20}
                fill={this.state.color}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
            />

        );
    }
}

export default Node;