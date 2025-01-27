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
      If you have a long-term project or position in mind, feel free to reach
      out via email at{" "}
      <StyledLink href="mailto:juandxce@gmail.com" target="_blank">
        juandxce@gmail.com
      </StyledLink>{" "}
      to discuss further.
    </>
  );
  return (
    <Box as="section" id="news" sx={styles.hireMe}>
      <Container>
        <BlockTitle title="Am I available for hire?" text={content} />
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
