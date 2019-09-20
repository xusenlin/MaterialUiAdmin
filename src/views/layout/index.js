import React from 'react';
import {Switch, Redirect, Route} from "react-router-dom";
import SideBar from './sideBar.js'
import TopBar from './topBar.js'
import MenuRoute from '../../router/menuRoute.js'
import Config from '../../config/index.js'
import './admin.scss'

const toggleSideBar = ()=>{
    document.getElementById('admin').classList.toggle('closeSideBar')
};

const Layout = props => {

    return (
        <div id="admin" className="admin">
            <SideBar
                siteName={Config.siteName}
                menuRoute={MenuRoute}
                color={'#9c27b0'}
            />
            <div className="container">
                <div className="maskLayer" onClick={toggleSideBar}/>
                <TopBar toggleSideBarFunc={toggleSideBar} />
                <Switch>
                    {
                        MenuRoute.map(route => {
                            return (
                                <Route exact key={route.path} path={route.path} component={route.component}/>
                            )
                        })
                    }
                    <Redirect exact from="/" to="/dashboard"/>
                    <Redirect to="/404"/>
                </Switch>
            </div>
        </div>
    );

};


export default Layout;
