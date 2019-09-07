import React from 'react';
import { NavLink } from "react-router-dom";
import { List,ListItem,ListItemText} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';

export default function Sidebar(props) {
    return (
        <div className="sideBar">
            <div className="sideBarContent">
                {props.siteName}
                <List component="nav" aria-label="main mailbox folders">
                    {
                        props.menuRoute.map(menu=>{
                            return (
                                <NavLink
                                    to={ menu.path }
                                    activeClassName="active"
                                    key={ menu.path }
                                >
                                    <ListItem button className="itemLink">
                                        <Icon style={{marginRight:'15px'}}>{ menu.icon }</Icon>
                                        <ListItemText primary={menu.title}/>
                                    </ListItem>
                                </NavLink>
                            )
                        })
                    }
                </List>
            </div>
        </div>
    )
}
