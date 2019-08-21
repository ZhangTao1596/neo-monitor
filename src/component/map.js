import React, {Component} from "react";
import * as d3 from "d3";
import "../style/map.css";

export default class Chart extends Component {
    componentWillMount() {
        
    }
    componentDidMount() {
        this.drawChart();
    }

    componentWillUnmount() {
        this.clean();
    }

    clean() {
        this.svg.remove()
    }

    drawChart() {
        let selected = new Object();
        let width = this.props.width;
        let height = this.props.height;
        let selectChanged = (d) => {
            this.setState({selecte: d});
            console.log(d);
        }
        d3.json("http://localhost:8080/map")
        .then(data => {
            let drag = simulation => {
                function dragstarted(d) {
                    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                }
            
                function dragged(d) {
                    d.fx = d3.event.x;
                    d.fy = d3.event.y;
                }
            
                function dragended(d) {
                    if (!d3.event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }
            
                return d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended);
            }
            let color =(d) => {
                let scale = d3.scaleOrdinal([1, 2, 3, 4, 5, 6, 7, 8, 9], d3.schemeCategory10);
                let color = scale(d.group);
                return color;
            }
            let links = data.links.map(d => Object.create(d));
            let nodes = data.nodes.map(d => Object.create(d));
            
            let simulation = d3.forceSimulation(nodes)
                .force("link", d3.forceLink(links).id(d => d.id).strength(0.1).distance(260))
                .force("charge", d3.forceManyBody().strength(-100))
                .force("center", d3.forceCenter(width / 2, height / 2));
    
            let svg = d3.select(".map").append("svg").attr("width", width).attr("height", height);
            this.svg = svg;
            let link = svg.append("g")
                .attr("stroke", "#999")
                .attr("stroke-opacity", 0.6)
                .selectAll("line")
                .data(links)
                .join("line")
                .attr("stroke-width", d => 1);
    
            let node = svg.append("g")
                .attr("stroke", "#fff")
                .attr("stroke-width", 1.5)
                .selectAll("circle")
                .data(nodes)
                .join("circle")
                .attr("r", 5)
                .attr("fill", color)
                .call(drag(simulation))
                .on("click", function(d) {
                    if (selected.hasOwnProperty("ele") && selected.hasOwnProperty("data")) {
                        console.log(selected.data.__proto__.group);
                        console.log(color(selected.data.__proto__.group));
                        d3.select(selected.ele).style("fill", "" + color(selected.data.__proto__.group));
                    }
                    selected = {ele: this, data: d};
                    selectChanged(d.__proto__.id);
                    d3.select(this).style("fill", "red");
                });
    
            node.append("title")
                .text(d => d.name);
    
            simulation.on("tick", () => {
                link
                    .attr("x1", d => d.source.x)
                    .attr("y1", d => d.source.y)
                    .attr("x2", d => d.target.x)
                    .attr("y2", d => d.target.y);
    
                node
                    .attr("cx", d => d.x)
                    .attr("cy", d => d.y);
            });
        })
    }
    
    render() {
        return <div />
    }
}
