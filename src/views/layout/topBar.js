import React from 'react';
import { AppBar,Toolbar,IconButton, Typography} from '@material-ui/core'
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
                    {/*<div>*/}
                    {/*    <IconButton*/}
                    {/*        aria-label="account of current user"*/}
                    {/*        aria-controls="menu-appbar"*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        color="inherit"*/}
                    {/*    >*/}
                    {/*        <AccountCircle />*/}
                    {/*    </IconButton>*/}
                    {/*    <Menu*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorEl}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        open={open}*/}
                    {/*        onClose={handleClose}*/}
                    {/*    >*/}
                    {/*        <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                    {/*        <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                    {/*    </Menu>*/}
                    {/*</div>*/}

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
