import React from 'react';
import { Arrow } from 'react-konva';
import Konva from 'konva';

class MyArrow extends React.Component {
    state = {
        x: this.props.x,
        y: this.props.y,
        color: 'green'
    };
    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
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
        console.log(e.target.attrs.x)
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
            <Arrow
                draggable
                x={this.state.x}
                y={this.state.y}
                points={[200, 200, 100, 200]}
                pointerLength={20}
                pointerWidth={20}
                fill={this.state.color}
                stroke={this.state.color}
                strokeWidth={4}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onClick={this.handleClick}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
            />
            
        );
    }
}

export default MyArrow;