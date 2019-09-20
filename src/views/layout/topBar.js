import React from 'react';
import { AppBar,Toolbar,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Notifications from '@material-ui/icons/Notifications';


const TopBar = props => {
    return (
        <div className="topBar">
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu" onClick={props.toggleSideBarFunc}>
                        <MenuIcon />
                    </IconButton>
                    <div style={{flexGrow: 1}} />
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Notifications />
                        </IconButton>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
