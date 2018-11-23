import React, { Component } from 'react';
import { connect } from "react-redux";
import { Stage, Layer, Text } from 'react-konva';
import Node from './shapes/Node'

class Dijkstra extends Component {

    coordinates = [
        { id: 1, x: 300, y: 200 },
        { id: 2, x: 500, y: 700 },
        { id: 3, x: 600, y: 600 },
        { id: 4, x: 700, y: 300 },
        { id: 5, x: 800, y: 200 }
    ]
    random = Math.floor((Math.random() * 200) + 1);
    render() {
        const { targets } = this.props;

        // we will move moving target into sepate layer
        const staticTargets = targets.filter(o => !o.isDragging);
        const movingTargets = targets.filter(o => o.isDragging);
        return (
            < Stage width={window.innerWidth} height={window.innerHeight} >
                <Layer>

                    {staticTargets.map(function (t, key) {
                        return <Node key={key} target={t} />;
                    })}
                    {movingTargets.map(function (t, key) {
                        return <Node key={key} target={t} />;
                    })}
                    {staticTargets.map(function (t, key) {
                        return <Text draggable key={key} x={t.x - 35} y={t.y - 35} text={t.id} fontSize={20} />;
                    })}
                    {movingTargets.map(function (t, key) {
                        return <Text draggable key={key} x={t.x - 35} y={t.y - 35} text={t.id} fontSize={20} />;
                    })}

                </Layer>
            </Stage >
        )
    }
}

export default connect(store => ({
    targets: store.targets
}))(Dijkstra);