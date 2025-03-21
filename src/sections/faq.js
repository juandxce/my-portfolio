import React from "react";
import { Box, Container, Flex } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: true,
    title: "What kind of work are you looking for?",
    contents: (
      <div>
        I'm open to either contract or full-time work (contracts require
        slightly higher compensation). The position must be 100% remote.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "What are your salary requirements?",
    contents: (
      <div>
        My salary expectation is at least $108k USD/year, negotiable if equity
        is offered.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "What is your location/timezone?",
    contents: (
      <div>
        I'm based in Mexico City (GMT-6 timezone) and offer flexibility in
        working hours.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "What is your notice time?",
    contents: (
      <div>
        I need two weeks to transition smoothly from my current commitments.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "Are you eligible to work in the US?",
    contents: (
      <div>
        Not currently. I would require visa sponsorship for US-based roles or
        could work as an international contractor instead.
      </div>
    ),
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = React.useState([0, 1, 2, 3, 4]);
  return (
    <Box as="section" id="faq" sx={styles.faq}>
      <Container>
        <BlockTitle
          title="Frequently Asked Questions"
          text="Questions? Maybe this will help"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} openIndexes={openIndexes} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 100%"],
  },
  faq: {
    pt: ["40px", null, null, null, "40px", null, "50px"],
    pb: ["20px", null, null, null, "70px", null, "50px"],
  },
};
