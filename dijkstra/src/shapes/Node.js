import React from 'react';
import { Circle } from 'react-konva';
import Konva from 'konva';
import { connect } from "react-redux";
import { updateTarget } from "../store/store";

class Node extends React.Component {
    componentDidMount = () => {
        // console.log("target mounted", this.props.target.id);
        if (this.props.target.isDragging) {
            this.node.startDrag();
        }
    }
    componentWillUnmount = () => {
        // console.log("target unmounted", this.props.target.id);
    }
    handleDragStart = e => {
        this.props.updateTarget(this.props.target.id, {
            isDragging: true
        });
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    };
    handleDragMove = () => {
        if (!this.node) {
            return;
        }
        this.props.updateTarget(this.props.target.id, {
            x: this.node.x(),
            y: this.node.y()
        });
        console.log("x:", this.props.target.x, " y:", this.props.target.y );
    };
    handleDragEnd = e => {
        if (!this.node) {
            return;
        }
        // console.log("drag end", this.props.target.id);
        this.props.updateTarget(this.props.target.id, {
            isDragging: false
        });
        e.target.to({
            duration: 1.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 3,
            shadowOffsetY: 3
        });
    };
    render() {
        const { target } = this.props;
        return (
            <Circle draggable
                x={target.x}
                y={target.y}
                radius={20}
                fill={target.isDragging ? "grey" : "rgb(223, 212, 186)"}
                shadowColor="black"
                shadowBlur={10}
                shadowOffsetX={3}
                shadowOffsetY={3}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragMove={this.handleDragMove}
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
})(Node);