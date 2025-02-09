import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import logoDark from '../assets/images/logo_dark.png'; // Import your image

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [category, setCategory] = React.useState('');
  const greencolor = '#B6D9D7';

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#121212', maxHeight: '8vh', width: '100vw' }}>
        <Toolbar sx={{ position: 'relative', justifyContent: 'space-between' }}>
          
          {/* Left Side: Menu Icon + Model Select */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>

            <FormControl
            sx={{
              color: '#121212e',
              fontFamily: 'JetBrains Mono',
              minWidth: 150,
              width: 150,
             }}
            size="small"
            >
              <Select
                value={category}
                onChange={handleCategoryChange}
                displayEmpty
                renderValue={category !== "" ? undefined : () => "Model"}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#121212',
                        color: greencolor,
                      },
                    },
                  }}
                sx={{
                  '.MuiOutlinedInput-notchedOutline': { borderColor: '#303134' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: greencolor },
                  '.MuiSvgIcon-root': { color: greencolor },
                  fontFamily: 'JetBrains Mono',
                  color: 'white',
                }}
              >
                <MenuItem value=""
                sx={{
                  fontFamily: 'JetBrains Mono',
                }}
                >
                  <em>None</em>
                </MenuItem>
                <MenuItem
                value="ChatGPT 4o"
                sx={{
                  fontFamily:'Jetbrains Mono',
                  color: greencolor
                }}
                > ChatGPT 4o</MenuItem>
                <MenuItem
                value="Gemini"
                sx={{
                  fontFamily:'Jetbrains Mono',
                  color: greencolor
                }}
                >Gemini</MenuItem>
                <MenuItem
                value="Deepseek"
                sx={{
                  fontFamily:'Jetbrains Mono',
                  color: greencolor
                }}
                >Deepseek</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Centered Logo */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <img src={logoDark} alt="Logo" style={{ height: 40 }} />
          </Box>

          {/* Right Side: User Icon */}
          <IconButton size="large" color="inherit" onClick={handleMenu}>
            <AccountCircle fontSize='large'/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleClose}

            sx={{
              '.MuiPaper-root': {
                bgcolor: '#303134',
                color: greencolor,
                fontFamily: 'JetBrains Mono',
              },
            }}
          >
            <MenuItem onClick={handleClose} sx={{fontFamily: 'Jetbrains Mono'}}>Profile</MenuItem>
            <MenuItem onClick={handleClose} sx={{fontFamily: 'Jetbrains Mono'}}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
