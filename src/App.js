import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./pages/main";
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
    main: () => <h2>log</h2>
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
        <div className={match ? "active" : ""}>
          {match ? "> " : ""}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
        <div
          style={{
            padding: "10px",
            width: "100%",
            height: "10%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", listStyleType: "none", padding: 0,}}>
            <li>
              <MarkLink to="/" activeOnlyWhenExact={true} label="Home"/>
            </li>
            <li>
              <MarkLink to="/logmonitor" label="LogMonitor"/>
            </li>
            <li>
              <MarkLink to="/seeds" label="Seeds"/>
            </li>
          </ul>

          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
            />
          ))}
        </div>

        <div id="content" style={{ flex: 1, padding: "0px", height: "90%"}}>
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

export default SidebarExample;
