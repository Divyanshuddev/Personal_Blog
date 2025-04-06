import { AppBar, Button, IconButton, Menu, MenuItem, Stack, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material'
import React, { MouseEvent, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
const styles = {
    appBar: {
        backgroundColor: "rgba(46, 46, 46, 0.8)"
    },
    button: {
        "&.MuiMenuItem-root.Mui-selected": {
        },
    },
    joinButton: {
        backgroundColor: "#ffff1a",
        color: "black"
    }
}
const MenuData = [
    {
        title: 'Home',
        navigate: "/"
    },
    {
        title: 'News',
        navigate: "/news"
    },
    {
        title: 'Blog',
        navigate: "/blog"
    },
    {
        title: 'PodCast',
        navigate: "/podcast"
    },
    {
        title: 'Resources',
        navigate: "/resources"
    },
    {
        title: 'Contact',
        navigate: "/contact"
    },
]
const NavBar = () => {
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
    const [alignment, setAlignment] = useState('');
    const [selected, setSelected] = useState<string>("");
    const navigate = useNavigate();
    const handleSelect = (data: string) => {
        setSelected(data)
    }
    const openMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    }
    const closeMenu = () => {
        setAnchorNav(null)
    }
    const handleChange = ( newAlignment: string,) => {
        setAlignment(newAlignment);
    };
    return (
        <AppBar position='static' sx={styles.appBar} elevation={0}>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>
                    Blogs
                </Typography>
                <Stack direction={'row'} spacing={1} sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
                    <ToggleButtonGroup color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform">
                        {
                            MenuData.map((data, index) => {
                                return (
                                    <ToggleButton value={data.title} sx={{ color: "white" }} key={index} onClick={() => navigate(data.navigate)}>{data.title}</ToggleButton>
                                )
                            })
                        }
                    </ToggleButtonGroup>
                </Stack>
                <IconButton sx={{ display: { xs: "flex", sm: "none", md: "none" } }} color='inherit' onClick={openMenu} aria-label="menu"
                    aria-controls="navbar-menu"
                    aria-haspopup="true">
                    <MenuIcon />
                </IconButton>
                <Menu id="navbar-menu"
                    anchorEl={anchorNav}
                    open={Boolean(anchorNav)}
                    onClose={closeMenu}
                    sx={{ display: { xs: "flex", sm: "none", md: "none" }, marginTop: 4 }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }} >
                    {
                        MenuData.map((data, index) => {
                            return (
                                <Stack key={index} component={'button'} sx={{ backgroundColor: "white", color: "black",width:"100%",borderBottom:"1px solid gray" }} onClick={()=>navigate(data.navigate)}>
                                    <MenuItem selected={selected === data.title} onClick={() => handleSelect(data.title)} sx={styles.button}>{data.title}</MenuItem>
                                </Stack>
                            )
                        })
                    }
                </Menu>
                <Button sx={styles.joinButton} variant='contained' >Join</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
