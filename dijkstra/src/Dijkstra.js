import React, { Component } from 'react';
import { connect } from "react-redux";
import { Stage, Layer, Text } from 'react-konva';
import Node from './shapes/Node'
import MyArrow from './shapes/MyArrow';

class Dijkstra extends Component {

    render() {
        const { targets, edges } = this.props;
        // console.log(this.props)
        return (
            < Stage width={window.innerWidth} height={window.innerHeight} >
                <Layer>
                    {targets.map((t) => {
                        return (
                            t[1].map((k, key) => {
                                return <MyArrow key={key} target_1={t[0]} target_2={k} />;
                            }))
                    })}

                    {targets.map((t) => {
                        return (
                            t[1].map((k, key) => {
                                return <Text key={key} x={(t[0].x + k.x) / 2} y={(t[0].y + k.y) / 2} text={k.id} fontSize={20} />;
                            }))
                    })}

                    {targets.map((t, key) => {
                        return <Node key={key} target={t[0]} />;
                    })}

                    {targets.map((t, key) => {
                        return <Text fill='#000' key={key} x={t[0].x - 35} y={t[0].y - 35} text={t[0].id} fontSize={20} />;
                    })}

                </Layer>
            </Stage >
        )
    }
}

const mapStateToProps = state => ({
    targets: [...state.edges.targets],
    edges: [...state.edges.targets]

})
export default connect(mapStateToProps)(Dijkstra);