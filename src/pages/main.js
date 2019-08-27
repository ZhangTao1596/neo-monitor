import React, {Component} from "react";
import Map from "../unit/nodemap";
import BlockTimeChart from "../unit/blocktimechart";
import TxCountChart from "../unit/txperblockchart";

export default class MainPage extends Component {
    render() {
        return (<div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                    <h2>block time graph</h2>
                    <BlockTimeChart />
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                    <h2>tx per block graph</h2>
                    <TxCountChart />
                </div>
            </div>
            <div className="map" style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                <Map height="1000" width="1000"/>
            </div>
        </div>)
    }
}