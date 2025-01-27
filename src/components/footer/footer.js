/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: ['column', null, null, null, null, 'row'],
          }}
        >
          <Text
            as="p"
            sx={{
              color: '#ffffff',
              opacity: '0.7',
              fontSize: '14px',
            }}
          >
            © {new Date().getFullYear()} by Juandxce
          </Text>
        </Box>
        <Box sx={styles.linksWrap}>
          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={'banner'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Home</ScrollLink>
          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={'about'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >About Me</ScrollLink>
          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={'testimonials'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Portfolio</ScrollLink>
          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={'services'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Services</ScrollLink>
          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={'news'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Hire Me</ScrollLink>
          <ScrollLink
            activeClass="active"
            sx={styles.nav.navLink}
            to={'faq'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            path="faq">FAQ</ScrollLink>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#0a0a0a',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      opacity: '0.05',
    },
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
  },
  linksWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: ['space-around', null, null, null, null, 'space-between'],
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': { opacity: 0.7 },
      pl: ['24px', null, null, null, '24px'],
      minWidth: '125px'
    },
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      pr: '24px',
      pt: '8px',
      pb: '8px',
      transition: '500ms',
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
