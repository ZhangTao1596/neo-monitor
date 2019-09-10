import React, {Image}from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./pages/main";
import LogMonitor from "./pages/logmonitor";
import logo from "./resources/neo_logo.svg";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <MainPage/>
  },
  {
    path: "/logmonitor",
    main: () => <LogMonitor />
  },
  {
    path: "/seeds",
    main: () => <h2>seed</h2>
  }
];

function MarkLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? "active" : ""} style={{backgroundColor: match ? "green" : "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",}}>
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column",  alignItems: "center", width: "100%", height: "100%", backgroundColor: "#F0F0F0"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            width: "80%",
            height: "50px",
            background: "#FFFFFF"
          }}
        >
          <div style={{width: "80px", height: "30px", marginLeft: "20px"}}>
            <img src={logo} />
          </div>
          <div style={{marginRight: "100px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "60%", height: "100%"}}>
            <div style={{height: "100%", width: "20%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <MarkLink to="/" activeOnlyWhenExact={true} label="Home"/>
            </div>
            <div style={{height: "100%", width: "20%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <MarkLink to="/logmonitor" label="LogMonitor"/>
            </div>
            <div style={{height: "100%", width: "20%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <MarkLink to="/seeds" label="Seeds"/>
            </div>
          </div>
        </div>

        <div id="content" style={{padding: "0px", width: "100%"}}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
