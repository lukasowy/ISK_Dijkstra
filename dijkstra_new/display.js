var dijkstra = new dijkstra().interval(1).rows(12).cols(20);

var svg = d3.select("#chart").append("svg")
    .attr("width", 960)
    .attr("height", 450);

var repaint = function () {

    var xscale = d3.scale.linear()
        .domain([0, dijkstra.cols() * 30])
        .range([0, svg.attr("width")]);

    var yscale = d3.scale.linear()
        .domain([0, dijkstra.rows() * 30])
        .range([0, svg.attr("height")]);

    var radius = (svg.attr("width") > svg.attr("height")) ? yscale(7) : xscale(7);

    // Edges
    var edge = svg.selectAll(".edge").data(dijkstra.edges(), function (e) {
        return e.id();
    });

    edge.enter()
        .append("g")
        .classed("edge", true)
        .attr("transform", function (d) {
            return "translate(" + xscale((0.5 + d.source().col()) * 30) + "," + yscale((0.5 + d.source().row()) * 30) +
                ")"
        })
        .each(function (d) {
            d3.select(this).append("line")
                .attr("id", function (d) {
                    return d.id()
                })
                .attr("x1", function (d) {
                    return 0
                })
                .attr("y1", function (d) {
                    return 0
                })
                .attr("x2", function (d) {
                    return xscale((d.destination().col() - d.source().col()) * 30);
                })
                .attr("y2", function (d) {
                    return yscale((d.destination().row() - d.source().row()) * 30);
                })
                .classed("path", function (d) {
                    return d.path();
                });

            d3.select(this).append("text")
                .attr("text-anchor", "middle")
                .attr("dominant-baseline", "central")
                .attr("x", function (d) {
                    return xscale((d.destination().col() - d.source().col()) / 2 * 30)
                })
                .attr("y", function (d) {
                    return yscale((d.destination().row() - d.source().row()) / 2 * 30)
                })
                .text(function (d) {
                    return d.weight();
                })
                .classed("distance", true);
        });

    edge.each(function (d) {
        d3.select(this)
            .classed("path", function (d) {
                return d.path();
            })
    })

    // Vertices
    var vertex = svg.selectAll(".vertex").data(dijkstra.vertices(), function (v) {
        return v.id();
    });

    vertex.enter()
        .append("g")
        .classed("vertex", true)
        .attr("transform", function (d) {
            return "translate(" + xscale((0.5 + d.col()) * 30) + "," + yscale((0.5 + d.row()) * 30) + ")"
        })
        .each(function (d) {
            d3.select(this).append("circle")
                .attr("id", function (d) {
                    return d.id()
                })
                .attr("r", function (d) {
                    return radius;
                })
                .classed("from", function (d) {
                    return dijkstra.from() != null && d.id() == dijkstra.from().id();
                })
                .classed("to", function (d) {
                    return dijkstra.to() != null && d.id() == dijkstra.to().id();
                })
                .classed("visited", function (d) {
                    return d.visited();
                })
                .classed("path", function (d) {
                    return d.path();
                });

            d3.select(this).append("text")
                .attr("text-anchor", "middle")
                .attr("dominant-baseline", "central")
                .text(function (d) {
                    return d.distance() != Infinity ? d.distance() : "";
                })
                .classed("weight", true);
        }).on("click", function () {
            if (!dijkstra.running()) {
                var v = d3.select(this).data()[0];
                if (dijkstra.from() == null) {
                    dijkstra.from(v);
                } else {
                    if (dijkstra.to() == null) {
                        dijkstra.to(v);
                    } else {
                        dijkstra.to(null);
                        dijkstra.from(v);
                    }
                }
            }
        });

    vertex.each(function (d) {
        d3.select(this)
            .classed("from", function (d) {
                return dijkstra.from() != null && d.id() == dijkstra.from().id();
            })
            .classed("to", function (d) {
                return dijkstra.to() != null && d.id() == dijkstra.to().id();
            })
            .classed("visited", function (d) {
                return d.visited();
            })
            .classed("path", function (d) {
                return d.path();
            })

        d3.select(this).select("text")
            .text(function (d) {
                return d.distance() != Infinity ? d.distance() : "";
            })
    })

}

dijkstra.onStart(repaint).onStep(repaint).start();


d3.select("#rows").on("change", function () {
    d3.selectAll(".vertex").remove();
    d3.selectAll(".edge").remove();
    dijkstra.rows(+this.value).init();
});
d3.select("#cols").on("change", function () {
    d3.selectAll(".vertex").remove();
    d3.selectAll(".edge").remove();
    dijkstra.cols(+this.value).init();
});