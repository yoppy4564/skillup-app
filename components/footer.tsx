import { Box, Grid, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SnsLink from './snsLink';

const FooterLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(10),
  '&:hover': {
    textDecoration: 'none',
  },
}));

const Footer = () => (
  <Box sx={{ bgcolor: '#f1f1f1' }}>
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ py: 2 }}
    >
      <Grid item sx={{ mb: 2 }}>
        <Stack direction="row" spacing={2}>
          <SnsLink src="/images/github.svg" href="https://github.com/yoppy4564/skillup-app" />                            
          <SnsLink src="/images/linkedIn.png" href="https://www.linkedin.com/in/%E8%8A%B3%E7%AB%A0-%E5%B9%B3%E6%9D%BE-834b77268" />                            
          <SnsLink src="/images/twitter.svg" href="https://twitter.com/yoppy_engineer" />        
          <SnsLink src="/images/wantedly.svg" href="https://www.wantedly.com/id/yoppy_engineer" />        
        </Stack>
      </Grid>
      <Grid item sx={{ mb: 2 }}>
        <FooterLink href="/blog">
          <Typography variant="body2" color="textSecondary" component="span">
            blogs
          </Typography>
        </FooterLink>
        <FooterLink href="/Contact">
          <Typography variant="body2" color="textSecondary" component="span">
            Contact
          </Typography>
        </FooterLink>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="textSecondary" component="span">
          &copy; Yoshiaki.hiramatsu and Daichi.hirano
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
