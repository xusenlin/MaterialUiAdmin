import React from 'react';

import { AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export default function TopBar(props) {
    return (
        <div className="topBar">
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        {props.siteName}
                    </Typography>
                    {/*{auth && (*/}
                    {/*    <div>*/}
                    {/*        <IconButton*/}
                    {/*            aria-label="account of current user"*/}
                    {/*            aria-controls="menu-appbar"*/}
                    {/*            aria-haspopup="true"*/}
                    {/*            onClick={handleMenu}*/}
                    {/*            color="inherit"*/}
                    {/*        >*/}
                    {/*            <AccountCircle />*/}
                    {/*        </IconButton>*/}
                    {/*        <Menu*/}
                    {/*            id="menu-appbar"*/}
                    {/*            anchorEl={anchorEl}*/}
                    {/*            anchorOrigin={{*/}
                    {/*                vertical: 'top',*/}
                    {/*                horizontal: 'right',*/}
                    {/*            }}*/}
                    {/*            keepMounted*/}
                    {/*            transformOrigin={{*/}
                    {/*                vertical: 'top',*/}
                    {/*                horizontal: 'right',*/}
                    {/*            }}*/}
                    {/*            open={open}*/}
                    {/*            onClose={handleClose}*/}
                    {/*        >*/}
                    {/*            <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                    {/*            <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                    {/*        </Menu>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </Toolbar>
            </AppBar>
        </div>
    )
}
