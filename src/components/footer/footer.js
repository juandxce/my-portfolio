/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import Logo from 'components/logo';
import logoLight from 'assets/logo-light.svg';
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
          <Logo image={logoLight} />
          <Text
            as="p"
            sx={{
              color: '#ffffff',
              opacity: '0.7',
              fontSize: '14px',
              mt: ['10px', null, null, null, null, '0'],
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
            to={'pricing'}
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
    backgroundColor: '#020718',
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
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': { opacity: 0.7 },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
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
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
