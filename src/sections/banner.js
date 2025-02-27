import React from "react";
import { Box, Container, Image, Heading } from "theme-ui";
import { keyframes } from "@emotion/core";
import bannerIcon1 from "assets/banner-icon-1-1.svg";
import bannerIcon2 from "assets/banner-icon-1-2.svg";
import bannerIcon3 from "assets/banner-icon-1-3.svg";
import bannerIcon4 from "assets/banner-icon-1-4.svg";
import bannerIcon5 from "assets/banner-icon-1-5.svg";
import bannerIcon6 from "assets/banner-icon-1-6.svg";
import bannerIcon7 from "assets/dot-pattern.svg";
import styled from "styled-components";
import { up } from "styled-breakpoints";

const StyledWrapper = styled(Box)`
  text-shadow: 2px 2px 8px #333;

  .dxce-wrapper {
    display: inline-flex;
    align-items: center;
    color: #ed4556;
    text-shadow: 3px 3px 8px #333;
    font-family: monospace;
  }

  .dxce-tag {
    font-size: 40px;

    ${up("lg")} {
      font-size: 55px;
    }
  }
`;

const Banner = () => {
  return (
    <StyledWrapper>
      <Box as="section" id="banner" sx={styles.banner}>
        <Container sx={styles.container}>
          <Image
            sx={styles.bannerIcon1}
            className="bannerIcon"
            alt="banner icon"
            src={bannerIcon1}
          />
          <Image
            sx={styles.bannerIcon2}
            className="bannerIcon"
            alt="banner icon"
            src={bannerIcon2}
          />
          <Image
            sx={styles.bannerIcon3}
            className="bannerIcon"
            alt="banner icon"
            src={bannerIcon3}
          />
          <Image
            sx={styles.bannerIcon4}
            className="bannerIcon"
            alt="banner icon"
            src={bannerIcon4}
          />
          <Image
            sx={styles.bannerIcon5}
            className="bannerIcon"
            alt="banner icon"
            src={bannerIcon5}
          />
          <Image
            sx={styles.bannerIcon6}
            className="bannerIcon"
            alt="banner icon"
            src={bannerIcon6}
          />
          <Image
            sx={styles.bannerIcon7}
            className="bannerIcon"
            alt="banner icon"
            src={bannerIcon7}
          />

          <Heading as="h2">
            Hi, I'm{" "}
            <span className="dxce-wrapper">
              <span className="dxce-tag">&#60;</span>Juandxce/
              <span className="dxce-tag">&#62;</span>
            </span>!
            <br/>
             I've been helping companies build exceptional software. Maybe I could help build yours too! 🚀
          </Heading>
        </Container>
      </Box>
    </StyledWrapper>
  );
};

export default Banner;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  banner: {
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,.3)",
    textAlign: "center",
    pt: ["110px", null, null, null, "130px"],
    pb: ["110px", null, null, null, "20px"],
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      width: "100%",
      maxWidth: ["100%", null, null, "80%", "70%", "740px", "1051px"],
      mx: "auto",
      mt: "30px",
      mb: ["40px", null, null, "65px"],
    },
  },
  logo: {
    display: "block",
    borderRadius: "50%",
    mx: "auto",
    boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)",
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
    h2: {
      color: "orange",
      zIndex: 10,
      position: "relative",
    },
  },
  bannerIcon1: {
    top: "10%",
    left: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: "10%",
    right: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: "40px",
    right: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: "130px",
    left: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: "50%",
    left: "15%",
  },
  bannerIcon6: {
    bottom: "-65px",
    left: "0px",
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: "30%",
    right: "0%",
  },
};
