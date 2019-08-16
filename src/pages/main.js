import React, {Component} from "react";
import Chart from "../component/map";

export default class MainPage extends Component {
    render() {
        return (<div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", height: "40%"}}>
                <div>
                    <h2>block time graph</h2>
                </div>
                <div>
                    <h2>tx per block graph</h2>
                </div>
            </div>
            <div className="map" style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center"}}>
                <Chart height="1000" width="1000"/>
            </div>
        </div>)
    }
}