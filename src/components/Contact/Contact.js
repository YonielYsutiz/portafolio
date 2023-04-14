import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import { baseContainerStyles } from '../../vendor';

export default function ContractTex() {
  return (
    <Box
      id="contactame"
      sx={{ ...baseContainerStyles, marginTop: { xs: '15%', md: '15%' } }}
    >
      <Box
        width={{ xs: '100%', lg: '60%' }}
        display="flex"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'start' }}
        flexWrap="wrap"
        gap={{ md: 10 }}
      >
        <h2 className="heading">Contáctame</h2>

        <section className="CardContainer contact-card">
          <h3>Ubicación y Enlaces</h3>
          <section>
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
          </section>
          <Box
            display="flex"
            gap="5%"
            justifyContent="center"
          >
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
          </Box>
        </section>
      </Box>
    </Box>
  );
}
