/* eslint-disable react/prop-types */
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Sidebar({ isDrawerOpen, toggleDrawer }) {
  const greencolor = '#B6D9D7';
  const history = ['Something','dasda']; // Add more items if needed

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': { width: 300, bgcolor: '#121212', color: 'white', fontFamily: 'JetBrains Mono' },
      }}
    >
      <List>
        {/* History Label */}
        <ListItem>
          <ListItemText
            primary="History"
            sx={{ fontFamily: 'JetBrains Mono', color: 'white', fontWeight: 'bold' }}
          />
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: greencolor }} />

      <List>
        {history.map((text) => (
          <>
            <ListItem
              key={text}
              button
              onClick={toggleDrawer(false)}
              sx={{
                transition: 'background-color 0.2s ease-in-out',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <ListItemText
                primary={text}
                sx={{ color: greencolor, fontFamily: 'JetBrains Mono' }}
              />
            </ListItem>
          </>
        ))}
      </List>
    </Drawer>
  );
}