import React from 'react';
import { Circle } from 'react-konva';
import Konva from 'konva';
import { connect } from "react-redux";
import { updateTarget } from "../store/store";

class Node extends React.Component {
    componentDidMount() {
        console.log("target mounted", this.props.target.id);
        // if a target is dragging we need to trigger drag&drop manually
        if (this.props.target.isDragging) {
            this.node.startDrag();
        }
    }
    componentWillUnmount() {
        console.log("target unmounted", this.props.target.id);
    }
    handleDragStart = e => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
        this.props.updateTarget(this.props.target.id, {
            isDragging: true
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
        if (!this.node) {
            return;
        }
        console.log("drag end", this.props.target.id);
        this.props.updateTarget(this.props.target.id, {
            isDragging: false
        });
    };
    render() {
        const { target } = this.props;
        return (
            <Circle draggable
                x={target.x}
                y={target.y}
                radius={20}
                fill={target.isDragging ? "red" : "rgb(223, 212, 186)"}
                shadowColor="black"
                shadowBlur={10}
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