import { Grid, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as React from 'react';

export default function ContractTex(){
    return ( 
    <>
    <Box               
        sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        justifyContent: 'center',
        height: '100dvh',
        }}>
    <Typography
        variant="h3"
        align="auto"
    >
    
    Contactame
    </Typography>

    <Grid
        id="contactame"
        rows={2}
        columns={2}
        container
    >
        <CssBaseline />
        <Grid
        mt={5}
        item
        >
        <Container maxWidth="md">
            <Card sx={{ minWidth: 100, borderRadius: '14px', padding: '10px' }}>
            <CardContent>
                <Typography
                variant="h5"
                component="div"
                >
                Ubicacion y Enlaces
                </Typography>
                <Grid>
                <Typography variant="body2">
                    <FmdGoodIcon /> Calle 152a #54-37 Casa 91
                </Typography>
                <hr />
                <Typography variant="body2">
                    <EmailIcon /> ysturizyoniel@gmail.com
                </Typography>
                <hr />
                <Typography variant="body2">
                    <PhoneIphoneIcon /> +57 3112670105
                </Typography>
                </Grid>
            </CardContent>
            <CardActions>
                <GitHubIcon />
                <Button
                size="small"
                href="https://github.com/YonielYsutiz"
                target="_black"
                >
                Github
                </Button>

                <LinkedInIcon />
                <Button
                size="small"
                href="https://www.linkedin.com/in/yoniel-alberto-ysturiz-diaz-a79740246/"
                target="_black"
                >
                Github
                </Button>
            </CardActions>
            </Card>
        </Container>
        </Grid>
    </Grid>
    </Box>
    </>
);
}