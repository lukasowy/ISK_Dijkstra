import React, { Component } from 'react';
import { connect } from "react-redux";
import { Stage, Layer, Text } from 'react-konva';
import Node from './shapes/Node'

class Dijkstra extends Component {
    random = Math.floor((Math.random() * 200) + 1);
    render() {
        const { targets } = this.props;

        return (
            < Stage width={window.innerWidth} height={window.innerHeight} >
                <Layer>

                    {targets.map( (t, key) => {
                        return <Node key={key} target={t} />;
                    })}
                    {targets.map( (t, key) => {
                        return <Text key={key} x={t.x - 35} y={t.y - 35} text={t.id} fontSize={20} />;
                    })}

                </Layer>
            </Stage >
        )
    }
}

export default connect(store => ({
    targets: store.targets
}))(Dijkstra);