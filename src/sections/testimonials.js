import React from "react";
import { Box } from "theme-ui";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "components/block-title";
import TestimonialsCard from "components/cards/testimonial-card";
import AAshop from "assets/portfolioimages/aashop.jpg";
import JHQLogo from "assets/portfolioimages/JHQ.jpg";
import wings from "assets/portfolioimages/wings.jpg";

import citibanamexBancanetMovil from "assets/portfolioimages/citibanamexBancanetMovil.jpg";
import lomelinApp from "assets/portfolioimages/lomelinApp.jpg";
import eogresourcesSite from "assets/portfolioimages/eogresourcesSite.jpg";
import pecan from "assets/portfolioimages/pecan.jpg";
import hawthorn from "assets/portfolioimages/hawthorn.jpg";
import siemens from "assets/portfolioimages/siemens.jpg";
import velvet from "assets/portfolioimages/velvet.jpg";
import lasEstacas from "assets/portfolioimages/lasEstacas.jpg";
import thrive from "assets/portfolioimages/thrive.jpg";

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      backgroundImage: hawthorn,
      text: "Hawthorn site for EOG Resources.",
      name: "Hawthorn.",
      url: "hawthornoiltransportation.com",
    },
    {
      backgroundImage: AAshop,
      text: "AAshop from PSD to HTML responsive site.",
      name: "AAshop",
      url:
        "https://user-images.githubusercontent.com/23223305/132113968-900f6f2a-2db8-47cd-9dc8-8bcfb25f9c67.png",
    },
    {
      backgroundImage: siemens,
      text: "Healthcare platform for Siemens.",
      name: "Siemens - healthcare platform",
      url: "https://www.siemens.com/global/en.html",
    },
  ],
  [
    {
      backgroundImage: thrive,
      text: "Thrive Market sustainable ecommerce platform.",
      name: "Thrive Market",
      url: "https://thrivemarket.com/",
    },
    {
      backgroundImage: citibanamexBancanetMovil,
      text: "Citibanamex bancanet empresarial app.",
      name: "Citibanamex",
      url: "https://www.banamex.com/",
    },
    {
      backgroundImage: wings,
      text: "Wings site revamp from scratch.",
      name: "Wings",
      url: "https://wings.com.mx/en/",
    },
  ],
  [
    {
      backgroundImage: JHQLogo,
      text: "Justice HQ MVP from scratch.",
      name: "JHQ",
      url:
        "https://justicehq.com",
    },
    {
      backgroundImage: eogresourcesSite,
      text: "Main site for EOG Resources.",
      name: "EOG - Main site",
      url: "https://www.eogresources.com/",
    },
    {
      backgroundImage: velvet,
      text: "Velvet Boutique Natural ecommerce site.",
      name: "Velvet",
      url: "https://velvetnatural.com.mx/",
    },
  ],
  [
    {
      backgroundImage: lasEstacas,
      text: "Las Estacas, natural park site.",
      name: "lasEstacas",
      url: "https://lasestacas.com/",
    },
    {
      backgroundImage: pecan,
      text: "Pecan Pipeline site for EOG Resources.",
      name: "Pecan Pipeline",
      url: "https://www.pecanpipeline.com/",
    },
    {
      backgroundImage: lomelinApp,
      text: "Lomelin Hybrid application for apartment tower management.",
      name: "Lomelin - App",
      url: "https://www.lomelin.mx/",
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: false,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle title="Portfolio" text="Here are some public projects I've worked on:" />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={`${index}-${item.text}`}>
            {item.map(
              (
                { image, backgroundImage, text, name, username, url },
                _index
              ) => (
                <TestimonialsCard
                  backgroundImage={backgroundImage}
                  image={image}
                  text={text}
                  name={name}
                  key={_index}
                  username={username}
                  url={url}
                />
              )
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: "#505052",
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["60px", null, null, null, "80px", null, "120px"],
    pl: ["15px", null, null, null, null, null, null],
    pr: ["15px", null, null, null, null, null, null],
  },
};
