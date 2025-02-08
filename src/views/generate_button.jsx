import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function GenerateCode() {
  return (
    <Container
      maxWidth="sx"
      sx={{ bgcolor: '#303134',
        height: '10vh',
        flex: 1,
        marginRight: 2.5,
        marginLeft: 2,}}
    >
      <Box sx={{ height: '100%' }} />
    </Container>
  );
}
