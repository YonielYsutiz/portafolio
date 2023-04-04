import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ContractTex() {
  return (
    <>
      <Box
        className="full-height"
        sx={{ textAlign: { sm: 'center' }, width: { sm: '100%', lg: '12%' } }}
      >
        <Typography variant="h3">Contactame</Typography>

        <Grid
          id="contactame"
          rows={2}
          columns={2}
          container
          sx={{
            display: { sm: 'flex' },
            justifyContent: { sm: 'center' },
          }}
        >
          <CssBaseline />
          <Grid
            mt={5}
            item
            className="neumorphism-content"
          >
            <Card sx={{ borderRadius: '18px', padding: '10px' }}>
              <CardContent>
                <h3>Ubicacion y Enlaces</h3>
                <Box>
                  <div className="contact-list">
                    <span>
                      <FmdGoodIcon />
                    </span>
                    Calle 152a #54-37 Casa 91
                  </div>

                  <hr />
                  <div className="contact-list">
                    <span>
                      <EmailIcon />
                    </span>
                    ysturizyoniel@gmail.com
                  </div>

                  <hr />

                  <div className="contact-list">
                    <span>
                      <PhoneIphoneIcon />
                    </span>
                    +57 3112670105
                  </div>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/YonielYsutiz"
                  target="_black"
                >
                  <GitHubIcon />
                </Button>

                <Button
                  size="small"
                  href="https://www.linkedin.com/in/yoniel-alberto-ysturiz-diaz-a79740246/"
                  target="_black"
                >
                  <LinkedInIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
