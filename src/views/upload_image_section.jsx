import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import "@fontsource/jetbrains-mono"; // Import JetBrains Mono font


export default function UploadImageSection() {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1); // Default zoom level

  const greencolor = '#B6D9D7';
  const grayish = '#303134';

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setScale(1); // Reset zoom when a new image is uploaded
    }
  };

  const handleZoom = (event) => {
    event.preventDefault();
    setScale((prevScale) => {
      const newScale = event.deltaY < 0 ? prevScale + 0.1 : prevScale - 0.1;
      return Math.min(Math.max(newScale, 1), 3); // Limit zoom between 1x and 3x
    });
  };

  return (
    <Container
      maxWidth="sx"
      sx={{
        bgcolor: grayish,
        borderRadius: '1%',
        height: '100%',
        flex: 1,
        marginLeft: 2,
        marginTop: -1,
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        //padding: '1%',
        justifyContent: 'center',
      }}
    >
      {image ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            // marginTop: -1,
          }}
          onWheel={handleZoom}
        >
          <img
            src={image}
            alt="Uploaded"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              transform: `scale(${scale})`,
              transition: 'transform 0.2s ease-in-out',
            }}
          />

          {/* Upload Button in the Bottom-Right */}
          <Button
            component="label"
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              borderRadius: '50%',
              width: 50,
              height: 50,
              minWidth: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
            }}
          >
            <AddIcon sx={{ fontSize: 28, color: greencolor }} />
            <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
          </Button>
        </Box>
      ) : (
        // Centered Upload Button + Label Before Image Upload
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            component="label"
            variant="contained"
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              color: greencolor,
              borderRadius: '50%',
              width: 60,
              height: 60,
              minWidth: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
            }}
          >
            <AddIcon sx={{ fontSize: 32 }} />
            <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
          </Button>

          {/* Text Label Below the Button */}
          <Typography
            sx={{
              color: greencolor,
              marginTop: 1.5,
              fontSize: '16px',
              fontWeight: 500,
              textAlign: 'center',
              fontFamily: 'JetBrains Mono',
            }}
          >
            Upload a Class Diagram
          </Typography>
        </Box>
      )}
    </Container>
  );
}
