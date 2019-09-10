import React from "react";
import {HashRouter, Switch, Redirect, Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './views/layout/index.js'
import Login from './views/login/index.js'
import NotFound from './views/error/404.js'
import {getToken} from "./utils/dataStorage";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/404" component={NotFound}/>
                    <Route path="/">
                        {
                            getToken() ? <Layout/> : <Redirect to="/login"/>
                        }
                    </Route>
                </Switch>
            </HashRouter>
        </React.Fragment>
    );
}

export default App;
