import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Introduce = ({ imageSrc, imageAlt, text, heading  }) => {
  return (
<Box display="flex" alignItems="center" gap={2}>
  <Box sx={{ flex: '1' }}>
    <Box sx={{ position: 'relative', overflow: 'hidden', paddingTop: '100%' }}>
      <Image src={imageSrc} alt={imageAlt} fill priority={true} objectFit="cover" />
    </Box>
  </Box>
  <Box sx={{ flex: '1' }}>
    <Typography variant="h5" component="h2" gutterBottom>
      {heading}
    </Typography>
    <Typography variant="body1">{text}</Typography>
  </Box>
</Box>



  );
};

export default Introduce
