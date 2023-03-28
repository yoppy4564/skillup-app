import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';

const Introduce = ({ imageSrc, imageAlt, text, heading  }) => {
  return (
  <Box display="flex" alignItems="center" gap={2}>
    <Box sx={{ width: '50%', position: 'relative',height:'100vh',margin: '10px 20px'}}>
        <Image src={imageSrc} alt={imageAlt} fill priority={true}/>
    </Box>
    <Box sx={{ width: '50%'}}>
        <Typography variant="h5" component="h2" gutterBottom>
            {heading}
        </Typography>
        <Typography variant="body1">
            {text}
        </Typography>
    </Box>
  </Box>
  );
};

export default Introduce
