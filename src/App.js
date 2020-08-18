import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
const Home = lazy(() => import("./views/home"));
const UDetails = lazy(() => import("./views/userDetails"));

function App() {
    return (
        <Router>
            <Switch>
                <Suspense fallback={<div />}>
                    <Route exact path="/home" component={Home}></Route>
                    <Route eaxct path="/details" component={UDetails}></Route>
                    <Redirect to="/home" />
                </Suspense>
            </Switch>
        </Router>
    );
}

export default App;
