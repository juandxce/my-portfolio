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
      "I'll build the user-facing features of your web platform with the latest and greatest JS technologies.",
    heading: "Fronted development",
    path: "#",
  },
  {
    image: serviceImage2,
    text:
      "I'll help you build a secure and reliable backend that will become the foundation of your business.",
    heading: "Backend development",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "Thinking of building an hybrid application? I got you covered.",
    heading: "App development",
    path: "#",
  },
  {
    image: serviceImage6,
    text: "Is your web platform starting to feel sluggish? Let's fix that!.",
    heading: "Increase Performance",
    path: "#",
  },
  {
    image: serviceImage4,
    text:
      "Want to create online campaings to promote your products? I do that too!.",
    heading: "Marketing & advertising",
    path: "#",
  },
  {
    image: serviceImage5,
    text:
      "Google doesn't seem to like your website? I can help you change that.",
    heading: "SEO Optimization",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle title="Services" text="What services do I have to offer?" />
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
