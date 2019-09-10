import React from 'react';
import { NavLink,withRouter } from "react-router-dom";
import { List,ListItem,ListItemText} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import logo from "../../assets/img/logo.svg";

const Sidebar = props => {
    const { location } = props
    return (
        <div className="sideBar">
            <div className="sideBarContent">
                <div className="logo">
                    <img src={logo} alt=""/>
                    {props.siteName}
                </div>
                <div className="dividingLine" />
                <List component="nav" aria-label="main mailbox folders">
                    {
                        props.menuRoute.map(menu=>{
                            return (
                                <NavLink
                                    to={ menu.path }
                                    className="navLink"
                                    activeClassName="active"
                                    key={ menu.path }
                                >
                                    <ListItem button className="itemLink"
                                              style={location.pathname === menu.path ? {backgroundColor:props.color}:{}}
                                    >
                                        <Icon style={{marginRight:'15px'}}>{ menu.icon }</Icon>
                                        <ListItemText primary={menu.title} disableTypography={true} />
                                    </ListItem>
                                </NavLink>
                            )
                        })
                    }
                </List>
            </div>
        </div>
    )
};

export default withRouter(Sidebar);
