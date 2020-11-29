import React from 'react';
import { Box, Text, Heading } from 'theme-ui';
import { Link } from "theme-ui";
const TestimonialsCard = ({  backgroundImage, text, name, url = "" }) => {
  return (
    <Link href={`${url}`} target="_blank">
    <Box sx={{ ...styles.testimonialsCard }} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Text sx={styles.fullText} as="p">{text}</Text>
      <Box sx={styles.testimonialsInfo}>
        <Box sx={styles.testimonialsContent}>
          <Heading as="h3">{name}</Heading>
        </Box>
      </Box>
    </Box>
    </Link> 
  );
};

export default TestimonialsCard;

const styles = {
  testimonialsCard: {
    minHeight: '200px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: 'white',
      textShadow: '1px 1px 1px #333',
    },
  },
  fullText: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: '10px',
    backgroundColor: 'rgb(222, 122, 22, .5)',
    opacity: 0,
    transition: '.35s linear',
    '&:hover': {
      opacity: 1,
    }
  },
  testimonialsInfo: {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    position: 'absolute',
    bottom: 0,
    height: 'auto',
    padding: '12px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .35)',
    left: 0
  },
  testimonialsContent: {

    zIndex: 1,
    h3: {
      m: 0,
      textShadow: '1px 1px 1px #333',
      color: 'white',
      fontSize: '17px',
      fontWeight: 600,
      lineHeight: 1,
    },
    p: {
      m: 0,
      textShadow: '1px 1px 1px #333',
      color: 'white',
      lineHeight: 1,
      fontSize: '14px',
      fontWeight: 500,
      mt: '10px',
    },
  },
};
