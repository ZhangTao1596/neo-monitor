import React, {Component} from "react";
import Map from "../unit/nodemap";
import BlockTimeChart from "../unit/blocktimechart";
import TxCountChart from "../unit/txperblockchart";

export default class MainPage extends Component {
    render() {
        return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{width: "60%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                <div style={{width: "40%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                    <h2 style={{color: "gray"}}>Latest Block</h2>
                    <h2 style={{color: "green"}}>3773043</h2>
                </div>
                <div style={{width: "30%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                    <h2 style={{color: "gray"}}>$SVG</h2>
                    <h2 style={{color: "green"}}>15s</h2>
                </div>
                
            </div>    
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                    <h4>block time</h4>
                    <BlockTimeChart />
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
                    <h4>tansactions per block</h4>
                    <TxCountChart />
                </div>
            </div>
            <div className="map" style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                <Map height="1000" width="1000"/>
            </div>
        </div>)
    }
}