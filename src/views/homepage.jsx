import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import UploadImageSection from './upload_image_section';
import CodeGeneratedSection from './code_generated_section';
import MenuAppBar from './app_bar';
import GenerateCode from './generate_button';
import { Typography } from '@mui/material';
import SelectLanguage from './select_language';

export default function Homepage() {
  return (
    <React.Fragment>
      
      <CssBaseline />
      <MenuAppBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: 'calc(100vh - 64px)',
          bgcolor: '#121212',
          gap: 4,
          paddingTop: '4%',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        {/* Left Section: Upload Image + Button */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: 2,
            height: '100%',
          }}
        >
          <Box>
            <Typography
              sx={{
                color: 'white',
                fontFamily: 'JetBrains Mono',
                fontSize: 20,
                marginLeft: '3%',
              }}
            >Class Diagram</Typography>
          </Box>
          <UploadImageSection
            sx={{
              flex: 1,
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
              width: '100%',
            }}
          >
            <GenerateCode />
            <SelectLanguage />
          </Box>
        </Box>

          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: 2,
            height: '99%',
            paddingRight: '1%',
          }}
        >
          <Box>
            <Typography
              sx={{
                color: 'white',
                fontFamily: 'JetBrains Mono',
                fontSize: 20,
                marginLeft: '0.3%',
              }}
            >Code Generation</Typography>
          </Box>

          <CodeGeneratedSection />
        </Box>
          
        
      </Box>
    </React.Fragment>
  );
}
