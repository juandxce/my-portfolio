import React, { useState, useEffect } from "react";
import { keyframes } from "@emotion/core";
import { Box, Container, Flex, Text, Heading, Link } from "theme-ui";
import BlockTitle from "components/block-title";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import Tooltip from "@material-ui/core/Tooltip";
import dynamic from "next/dynamic";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import { useBreakpoint } from "styled-breakpoints/react-styled";

const DynamicComponent = dynamic(() => import("./dynamicComponent"), {
  ssr: false,
});

const SkillsWrap = styled.div`
  width: 100%;

  ul {
    padding-left: 20px;
  }

  ${up("lg")} {
    width: 50%;
    position: relative;
    z-index: 1;

    ul {
      padding-left: initial;
    }
  }
`;

const CanvasWrap = styled.div`
  position: absolute;
  overflow: visible;
  margin-top: 250px;
  width: 75vw;
  right: 0;
  z-index: -1;

  ${up("lg")} {
    margin-top: 0;
    position: initial;
    width: 50%;
  }
`;

const AboutMe = (props) => {
  const [_document, set_document] = React.useState(null);
  React.useEffect(() => {
    set_document(document);
  }, []);

  const YOE = new Date().getFullYear() - 2016;
  const isLargeDevice = useBreakpoint(up("lg"));

  return (
    <Box as="section" id="about" sx={styles.aboutMe}>
      <Container>
        <BlockTitle
          title="About Me"
          text={`I'm Juandxce, a Full Stack developer. I've developed first-class software for the web during the last ${YOE} years (mainly focusing on the frontend).
          I enjoy taking long walks and meeting new people/discovering new exciting places.`}
        />
        <Box sx={styles.socialMediaContainer}>
          <Tooltip title="LinkedIn">
            <Link
              sx={styles.socialMediaLink}
              href="https://www.linkedin.com/in/juandxce"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </Tooltip>

          <Tooltip title="GitHub">
            <Link
              sx={styles.socialMediaLink}
              href="https://github.com/juandxce"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </Tooltip>
          <Tooltip title="Twitter">
            <Link
              sx={styles.socialMediaLink}
              href="https://twitter.com/Juandxce"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </Tooltip>
          <Tooltip title="Download CV">
            <Link
              sx={styles.socialMediaLink}
              href="juan_pablo_guzman_cv_developer.pdf"
              download
            >
              <HiDocumentDownload />
            </Link>
          </Tooltip>
        </Box>
        <div
          style={{
            display: "flex",
            position: "relative",
            zIndex: 1,
            position: "relative",
          }}
        >
          <SkillsWrap>
            <Heading sx={styles.skills} as="h2">
              Skills
            </Heading>
            <Flex>
              <Box p={isLargeDevice && 2}>
                <Text>I'm comfortable (and enjoy working with) with: </Text>
                <ul>
                  <li>JavaScript (ES6)</li>
                  <li>React.js</li>
                  <li>Angular (2-5)</li>
                  <li>ionic framework (2-4)</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                  <li>Responsive Web Design</li>
                  <li>Redux / Redux-saga</li>
                  <li>HTML</li>
                  <li>CSS/SASS</li>
                  <li>Firebase</li>
                  <li>Google Cloud Platform</li>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>GraphQL (Apollo)</li>
                  <li>
                    Non relational databases ( PouchDB, CouchDB, Mongodb,
                    firestore)
                  </li>
                </ul>
              </Box>
              <Box p={isLargeDevice && 2}>
                <Text>And know:</Text>
                <ul>
                  <li>Angularjs</li>
                  <li>JQuery</li>
                  <li>(some) SQL (MySQL)</li>
                  <li>(some) PHP</li>
                </ul>
              </Box>
            </Flex>
          </SkillsWrap>
          <CanvasWrap>{_document && <DynamicComponent />}</CanvasWrap>
        </div>
      </Container>
    </Box>
  );
};

export default AboutMe;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  aboutMe: {
    pt: ["80px", null, null, null, "80px", null, "140px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
    overflow: "hidden",
  },
  skills: {
    marginTop: "30px",
  },
  btnWrap: {
    width: "302px",
    height: "60px",
    mt: ["-20px", null, null, "0px"],
    mb: ["40px", null, null, "60px"],
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    p: "7px",
    mx: "auto",
    button: {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "5px",
      color: "#ed911a",
      letterSpacing: "-0.24px",
      fontSize: "16px",
      fontWeight: 500,
      position: "relative",
      outline: "none",
      fontFamily: "DM Sans",
      transition: "all 500ms ease",
      "&.active": {
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
        backgroundColor: "#ffffff",
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
  },
  grid: {
    width: "100%",
    maxWidth: "960px",
    mx: ["auto"],
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
  socialMediaContainer: {
    display: "flex",
  },
  socialMediaLink: {
    fontSize: "2.5em",
    color: "#fafafa",
    transition: "all 300ms linear",
    background: "#666",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    padding: 0,
    width: "4rem",
    height: "4rem",
    marginRight: "2rem",
    "&:hover": {
      background: "orange",
    },
    padding: "0 1vw",
  },
};
