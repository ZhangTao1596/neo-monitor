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

    async drawChart() {
        let selected = new Object();
        let width = this.props.width;
        let height = this.props.height;
        let selectChanged = (d) => {
            this.setState({selecte: d});
            console.log(d);
        }
        //let data = await d3.json("https://gist.githubusercontent.com/mbostock/4062045/raw/5916d145c8c048a6e3086915a6be464467391c62/miserables.json");
        let data = JSON.parse('{"nodes":[{"id":"3457362943000707072","name":"47.251.5.71:10333","group":4},{"id":"3407702383640707072","name":"47.74.151.67:10333","group":1},{"id":"2282186335205195776","name":"31.171.244.97:10333","group":1},{"id":"3807757297110220800","name":"52.215.223.22:10333","group":1},{"id":"3757829260071927808","name":"52.38.125.205:10333","group":1},{"id":"3412563427626319872","name":"47.91.220.91:10333","group":1},{"id":"3768896776613396480","name":"52.77.207.166:10333","group":1},{"id":"-4338814873259999232","name":"195.201.110.220:10333","group":1},{"id":"129281059793141760","name":"1.203.76.112:10333","group":1},{"id":"3412071688230666240","name":"47.90.29.31:10333","group":1},{"id":"6906315629803339776","name":"95.216.41.121:10333","group":1},{"id":"3962880954550714368","name":"54.254.251.59:10335","group":1},{"id":"3412503414048292864","name":"47.91.165.198:10333","group":1},{"id":"-7711374230899130368","name":"148.251.177.254:10333","group":1},{"id":"8275116132170989568","name":"114.215.30.71:10333","group":1},{"id":"220883924713734144","name":"3.16.188.194:10333","group":1},{"id":"3768640440080269312","name":"52.76.230.131:10333","group":1},{"id":"8655779019190960128","name":"120.31.129.40:10333","group":1},{"id":"247849958486048768","name":"3.112.138.57:10333","group":1},{"id":"3458232532144226304","name":"47.254.28.42:10333","group":1},{"id":"1335417342341414912","name":"18.136.90.255:10333","group":1},{"id":"-4888503788737396736","name":"188.40.139.180:10333","group":1},{"id":"2589114198645014528","name":"35.238.97.165:10333","group":1},{"id":"3916887631508013056","name":"54.91.148.140:10333","group":1},{"id":"8556545238630924288","name":"118.190.244.143:10333","group":1},{"id":"3418073995221139456","name":"47.111.112.48:10333","group":1},{"id":"1688663065109200896","name":"23.111.86.28:10333","group":1},{"id":"2574537049577619456","name":"35.186.151.206:10333","group":1},{"id":"3415586513372053504","name":"47.102.153.214:10333","group":1},{"id":"8672819830218817536","name":"120.92.11.175:10333","group":1},{"id":"3804025236817969152","name":"52.202.156.204:10333","group":1},{"id":"3940878773362622464","name":"54.176.208.93:10333","group":1},{"id":"3808921327736717312","name":"52.220.1.196:10333","group":1},{"id":"3769194447911780352","name":"52.78.222.97:10333","group":1},{"id":"3666429564284305408","name":"50.225.198.67:10333","group":1},{"id":"2519884896406077440","name":"34.248.109.246:10333","group":1},{"id":"6906321273390366720","name":"95.216.46.155:10333","group":1},{"id":"-2487634842848067584","name":"221.122.37.74:10333","group":1},{"id":"3401417411967582208","name":"47.52.67.29:10333","group":1},{"id":"1001749390473822208","name":"13.230.237.195:10333","group":1}],"links":[{"source":"3457362943000707072","target":"3407702383640707072","value":1},{"source":"3457362943000707072","target":"2282186335205195776","value":1},{"source":"3457362943000707072","target":"3412563427626319872","value":1},{"source":"3457362943000707072","target":"129281059793141760","value":1},{"source":"3457362943000707072","target":"3412071688230666240","value":1},{"source":"3457362943000707072","target":"3412503414048292864","value":1},{"source":"3457362943000707072","target":"220883924713734144","value":1},{"source":"3457362943000707072","target":"247849958486048768","value":1},{"source":"3457362943000707072","target":"1335417342341414912","value":1},{"source":"3457362943000707072","target":"2589114198645014528","value":1},{"source":"3457362943000707072","target":"3418073995221139456","value":1},{"source":"3457362943000707072","target":"1688663065109200896","value":1},{"source":"3457362943000707072","target":"2574537049577619456","value":1},{"source":"3457362943000707072","target":"3415586513372053504","value":1},{"source":"3457362943000707072","target":"2519884896406077440","value":1},{"source":"3457362943000707072","target":"3401417411967582208","value":1},{"source":"3457362943000707072","target":"1001749390473822208","value":1},{"source":"3807757297110220800","target":"3457362943000707072","value":1},{"source":"3757829260071927808","target":"3457362943000707072","value":1},{"source":"3768896776613396480","target":"3457362943000707072","value":1},{"source":"-4338814873259999232","target":"3457362943000707072","value":1},{"source":"6906315629803339776","target":"3457362943000707072","value":1},{"source":"3962880954550714368","target":"3457362943000707072","value":1},{"source":"-7711374230899130368","target":"3457362943000707072","value":1},{"source":"8275116132170989568","target":"3457362943000707072","value":1},{"source":"3768640440080269312","target":"3457362943000707072","value":1},{"source":"8655779019190960128","target":"3457362943000707072","value":1},{"source":"3458232532144226304","target":"3457362943000707072","value":1},{"source":"-4888503788737396736","target":"3457362943000707072","value":1},{"source":"3916887631508013056","target":"3457362943000707072","value":1},{"source":"8556545238630924288","target":"3457362943000707072","value":1},{"source":"8672819830218817536","target":"3457362943000707072","value":1},{"source":"3804025236817969152","target":"3457362943000707072","value":1},{"source":"3940878773362622464","target":"3457362943000707072","value":1},{"source":"3808921327736717312","target":"3457362943000707072","value":1},{"source":"3769194447911780352","target":"3457362943000707072","value":1},{"source":"3666429564284305408","target":"3457362943000707072","value":1},{"source":"6906321273390366720","target":"3457362943000707072","value":1},{"source":"-2487634842848067584","target":"3457362943000707072","value":1}]}');
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
            .force("link", d3.forceLink(links).id(d => d.id).strength(0.1).distance(40))
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
    }
    
    render() {
        return <div />
    }
}
