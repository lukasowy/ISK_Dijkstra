import React from 'react';
import { Arrow } from 'react-konva';
import Konva from 'konva';
import { connect } from "react-redux";
import { updateTarget } from "../store/store";

class MyArrow extends React.Component {
    state = {
        // x: this.props.x,
        // y: this.props.y,
        color: '#6C757D'
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
        const { target } = this.props;
        return (
            <Arrow
                points={[target.x, target.y, 1000, 200]}
                pointerLength={10}
                pointerWidth={10}
                fill={this.state.color}
                stroke={this.state.color}
                strokeWidth={4}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                ref={node => {
                    this.node = node;
                }}
            />

        );
    }
}

export default connect(null, {
    updateTarget
})(MyArrow);