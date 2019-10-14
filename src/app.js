import React, { Component } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; 

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

export class App extends Component
{
    render(){
        return (
            <Router>
                <div style={{ marginBottom: "70px" }}>
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route> 
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
