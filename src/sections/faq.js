import React from 'react';
import { Box, Container, Flex } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'What is your location/timezone?',
    contents: (
      <div>
        I'm located in Mexico City in the GMT-6 timezone, but I'm pretty flexible about the work schedule.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What is your notice time?',
    contents: (
      <div>
        I'd need 2 weeks to be able to leave everything in place before starting a new role.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Are you eligible to work in the US?',
    contents: (
      <div>
        No, I would need visa sponsorship if that was a requirement.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq">
      <Container>
        <BlockTitle
          title="Frequently Ask Questions"
          text="Any questions? Maybe this will help"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 100%'],
  },
};
