import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { educationPayload } from '../../api';
import { CourseContentList } from './components';

export default function Education() {
  return (
    <Box
      className="full-height"
      id="educacion"
    >
      <Typography variant="h3">Mis estudios</Typography>

      <Grid
        rows={2}
        columns={2}
        gap={5}
        container
        alignItems="stretch"
      >
        <CssBaseline />

        {educationPayload.map(
          ({ year, title, platform, content, link }, idx) => (
            <Grid
              mt={5}
              item
              key={idx}
              className="neumorphism-content"
            >
              <Card
                sx={{
                  minWidth: 100,
                  borderRadius: '18px',
                  padding: '10px',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {year}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  >
                    {platform}
                  </Typography>

                  <CourseContentList courseContent={content} />
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={link}
                    target="_black"
                  >
                    Link del curso
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
