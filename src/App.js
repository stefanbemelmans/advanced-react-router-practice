import React from "react";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Settings from "./components/Settings";
import Wall from "./components/Wall";
import Profiles from "./components/Profiles";
import Marquee from "./components/Marquee";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";


import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";

function App() {
  // ### Routes
  // * /              -> Dashboard
  // * /charts        -> Charts
  // * /tables        -> Tables
  // * /settings      -> Settings
  // * /wall          -> Wall
  // * /profiles      -> Profiles
  // * /marquee/:text -> Marquee
  // * /profile/:id   -> Profile
  
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
            <Switch>
              <Route path="/charts" component={Charts} />
              <Route path="/tables" component={Tables} />
              <Route path="/settings" component={Settings} />  
              <Route path="/wall" component={Wall} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/marquee/:text" component={Marquee} />
              <Route path="/wall" component={Wall} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/" component={Dashboard} />
            </Switch>
            
            {/* PUT YOUR ROUTES HERE */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
