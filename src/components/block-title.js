import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

const BlockTitle = ({ title, text }) => {
  return (
    <Box sx={styles.blockTitle} className="blockTitle">
      <Heading as="h3">{title}</Heading>
      <Text as="p">{text}</Text>
    </Box>
  );
};

export default BlockTitle;

const styles = {
  blockTitle: {
    textAlign: 'center',
    mb: ['30px', null, null, null, '30px', null, '40px'],
    h3: {
      color: '#ed911a',
      fontSize: ['23px', null, null, '30px'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1,
      mb: '20px',
    },
    p: {
      lineHeight: 1,
      fontSize: '18px',
      color: '#C9CFD5',
    },
  },
};
