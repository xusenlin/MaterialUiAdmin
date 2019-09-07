import React from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import SideBar from './sideBar.js'
import TopBar from './topBar.js'
import MenuRoute from '../../menuRoute.js'
import Config from '../../config/index.js'
import './admin.scss'


function App() {
    return (
        <div className="admin">
            <SideBar
                siteName={Config.siteName}
                menuRoute={MenuRoute}
            />
            <div className="container">
                <TopBar/>
                <Switch>
                    <Route exact path="/">
                         <Redirect to="/dashboard"/>
                    </Route>
                    {
                        MenuRoute.map(route=>{
                            return (
                                <Route exact key={ route.path } path={ route.path } component={route.component} />
                            )
                        })
                    }
                    <Redirect  to="/404" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
