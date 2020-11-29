import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'How long does the application take?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I make payment outside of Hong Kong?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I get the payment complete?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
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
