import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import serviceImage1 from "assets/service-1.png";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      "I'll create user-facing features for your web platform using the latest and greatest JavaScript technologies.",
    heading: "Front-end development",
    path: "#",
  },
  {
    image: serviceImage2,
    text:
      "I'll build a secure, reliable, and scalable backend to serve as the backbone of your business.",
    heading: "Backend development",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "Planning a hybrid application? I've got you covered.",
    heading: "App development",
    path: "#",
  },
  {
    image: serviceImage6,
    text: "If your platform is slowing down, I'll make it fast and efficient again.",
    heading: "Improve Performance",
    path: "#",
  },
  {
    image: serviceImage4,
    text:
      "Looking to create online campaigns to promote your products? I can help with that too.",
    heading: "Marketing & advertising",
    path: "#",
  },
  {
    image: serviceImage5,
    text:
      "Struggling to get noticed by Google? Let's fix that and improve your website's visibility.",
    heading: "SEO Optimization",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle title="Services" text="What can I help you with?" />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
