import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material';
import { styled } from "@mui/material/styles";
import { useState } from 'react';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const StyledSearch = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    //borderRadius: theme.shape.borderRadius,
    width: '40%',
  }));

  const StyledIcons = styled(Box)(({theme}) => ({
    // backgroundColor: 'white',
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  }));

  const StyledUser = styled(Box)(({theme}) => ({
    // backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }));

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>
          Social Media 
        </Typography>
        <Pets sx={{display: {xs: 'block', sm: 'none'}}} />

        <StyledSearch>
          <InputBase placeholder='Search...'></InputBase>
        </StyledSearch>
        <StyledIcons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar 
            sx={{width: 30, height: 30}}
            onClick={(e) => setOpenMenu(true)}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          />
        </StyledIcons>

        <StyledUser onClick={(e) => setOpenMenu(true)}>
          <Avatar 
            sx={{width: 30, height: 30}}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          />
          <Typography variant='body1'>John</Typography>
        </StyledUser>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        //anchorEl={anchorEl}
        open={openMenu}
        onClose={(e) => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
