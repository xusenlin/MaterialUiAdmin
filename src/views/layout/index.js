import React from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import MenuRoute from '../../menuRoute.js'


function App() {
    return (
        <Switch>
            {
                MenuRoute.map(route=>{
                    return (
                        <Route exact key={ route.path } path={ route.path } component={route.component} />
                    )
                })
            }
            <Redirect  to="/404" />
        </Switch>
    );
}

export default App;
