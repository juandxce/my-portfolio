import React from "react";
import { Container, Box, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import styled from "styled-components";
import { up } from "styled-breakpoints";

const StyledLink = styled.a`
  color: orange;
`;

const HireMe = () => {
  const content = (
    <>
      You have a long-term project/position that you'd like to hire me for? Send
      me a message to{" "}
      <StyledLink href="mailto:juandxce@gmail.com" target="_blank">
        juandxce@gmail.com
      </StyledLink>{" "}
      and if we match I'll join your journey.
    </>
  );
  return (
    <Box as="section" id="news" sx={styles.hireMe}>
      <Container>
        <BlockTitle title="Hire THE Juandxce" text={content} />
      </Container>
    </Box>
  );
};

export default HireMe;

const styles = {
  hireMe: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["40px", null, null, null, "140px", null, "100px"],
  },
  blogWrapper: {
    mx: "-15px",
  },
};
