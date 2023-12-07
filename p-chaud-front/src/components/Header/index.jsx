import React, {useState} from 'react';
import {AppBar, Box, IconButton, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import {useUser} from "../../contexts/UserContext";

const Header = () => {

    const {user, signOut} = useUser();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{backgroundColor: "#FF0000"}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" onClick={()=>navigate('')}>
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    P Chaud
                </Typography>

                <IconButton color="inherit" onClick={handleMenu}>
                    <PersonIcon />
                </IconButton>
                {user &&
                    <Stack direction={"row"} alignItems={"center"}>
                        <Typography>
                            Bienvenue {user.username}
                        </Typography>
                        <IconButton color="inherit" onClick={signOut}>
                            <LogoutIcon />
                        </IconButton>
                    </Stack>
                }
                <IconButton color="inherit">
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                {user ? (
                    <Box>
                        <MenuItem onClick={() => {handleClose();}}>Account</MenuItem>
                    </Box>
                ) : (
                    <Box>
                        <MenuItem onClick={() => {handleClose(); navigate('signIn')}}>Sign In</MenuItem>
                        <MenuItem onClick={() => {handleClose(); navigate('signUp')}}>Sign Up</MenuItem>
                    </Box>
                )}
            </Menu>
        </AppBar>
    );
};

export default Header;
