import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Input } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';


const pages = ['home', 'gender', 'contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setColorMenu("#fe4240")
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgba(0,0,0, 0.2)", padding: "10px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span className='logoName' style={{ color: "#fe4240" }}>ALLEZ</span><span className='logoName'>CINE!</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span className='logoName' style={{ color: "#fe4240" }}>ALLEZ</span><span className='logoName'>CINE!</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: { md: "30px" } }}>
            {pages.map((page) => (
              page == "gender" ?
                <>
                  <Button
                    key={page}
                    onClick={(e) => handleCloseNavMenu(e)}
                    sx={{ my: 2, marginLeft: "10px", color: 'white', display: 'block', backgroundColor: "#fe4240", marginRight: "5px" }}
                  >
                    {page}
                  </Button>

                  <Button
                    sx={{ my: 2, display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px" }}
                  >
                  </Button>
                  <Button
                    sx={{ my: 2, display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "5px" }}
                  >
                  </Button>
                  <Button
                    sx={{ my: 2, display: 'block', backgroundColor: "rgba(255, 255, 255, 0.2)", marginRight: "70px" }}
                  >
                  </Button>
                </>
                :
                <Button
                  key={page}
                  onClick={(e) => handleCloseNavMenu(e)}
                  sx={{ my: 2, color: "white", display: 'block' }}
                  className={page == "home" ? "navButton active" : "navButton"}
                >
                  {page}
                </Button>
            ))}
          </Box>
          <Paper
            component="form"
            sx={{ p: '0px 4px', display: { xs: "none", md: "flex" }, alignItems: 'center', width: "25%", borderRadius: "20px", backgroundColor: "rgba(0,0,0, 0.5)" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search Google Maps"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px', color: "white" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Box sx={{ flexGrow: 0, display: { sx: "flex", md: "none" } }}>
            <Tooltip title="Search">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <IconButton type="button" sx={{ p: '5px', color: "white", backgroundColor: "gray" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Input placeholder="Search" fullWidth sx={{ padding: "5px 10px", }} />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
