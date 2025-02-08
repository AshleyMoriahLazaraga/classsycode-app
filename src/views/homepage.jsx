import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import UploadImageSection from './upload_image_section';
import CodeGeneratedSection from './code_generated_section';
import MenuAppBar from './app_bar';

export default function Homepage() {
  return (
    <React.Fragment>
      
      <CssBaseline />
      <MenuAppBar />
      <Box
        sx={{
          display: 'flex',
          //flexDirection: 'column',  // Ensure vertical stacking
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '91.5vh',
          // height: '100vh',
          //padding: 2, // Adds some spacing
          bgcolor: '#121212', // Background color for the entire section
        }}
      >       
        {/* Left Container */}
        <UploadImageSection />

        {/* Right Container */}
        <CodeGeneratedSection />
        
      </Box>
    </React.Fragment>
  );
}
