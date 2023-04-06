import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { educationPayload } from '../../api';
import { baseContainerStyles } from '../../vendor';
import { CourseContentList } from './components';

export default function Education() {
  return (
    <Box
      sx={{
        ...baseContainerStyles,
        height: { md: '100dvh' },
      }}
      id="educacion"
    >
      <Box
        width={{ xs: '100%', lg: '70%' }}
        display="flex"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        flexWrap="wrap"
      >
        <h2 className="heading full-width">Mis estudios</h2>
        {educationPayload.map(
          ({ year, title, platform, content, link }, idx) => (
            <section
              key={idx}
              className="CardContainer"
            >
              <div>
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
              </div>
              <div>
                <Button
                  size="small"
                  href={link}
                  target="_black"
                >
                  Link del curso
                </Button>
              </div>
            </section>
          )
        )}
      </Box>
    </Box>
  );
}
