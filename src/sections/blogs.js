import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import blogImage1 from 'assets/blog-1-1.png';
import blogImage2 from 'assets/blog-1-2.png';
import blogImage3 from 'assets/blog-1-3.png';
import blogImage4 from 'assets/blog-1-4.png';

const HireMe = () => {
  return (
    <Box as="section" id="news" sx={styles.hireMe}>
      <Container>
        <BlockTitle
          title="Hire THE Juandxce"
          text={`You have a long-term project/position that you'd like to hire me for?
          The current bid for me is 115kUSD/year.
          Send me a message @ juandxce@gmail.com and if we match I'd like to join your journey.`}
        />
      </Container>
    </Box>
  );
};

export default HireMe;

const styles = {
  hireMe: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
