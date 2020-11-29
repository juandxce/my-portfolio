import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';
import placeholderImage from 'assets/portfolioimages/placeholderwork.jpg';
import AAshop from 'assets/portfolioimages/AAshop.jpg';
import cuda from 'assets/portfolioimages/cuda.jpg';
import sophia from 'assets/portfolioimages/sophia.jpg';
import tajamlandingpage from 'assets/portfolioimages/tajamlandingpage.jpg';
import wings from 'assets/portfolioimages/wings.jpg';
import applaunch from 'assets/portfolioimages/applaunch.jpg';

import citibanamexBancanetMovil from 'assets/portfolioimages/citibanamexBancanetMovil.png';
import lomelinApp from 'assets/portfolioimages/lomelinApp.png';
import eogresourcesSite from 'assets/portfolioimages/eogresourcesSite.png';
import pecan from 'assets/portfolioimages/pecan.png';
import hawthorn from 'assets/portfolioimages/hawthorn.png';
import siemens from 'assets/portfolioimages/siemens.png';
import velvet from 'assets/portfolioimages/velvet.png';
import lasEstacas from 'assets/portfolioimages/lasEstacas.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      backgroundImage: hawthorn,
      text: 'Hawthorn site for EOG Resources.',
      name: 'Hawthorn.',
      url:"hawthornoiltransportation.com",
    },
    {
      backgroundImage: AAshop,
      text: 'AAshop from PSD to HTML responsive site.',
      name: 'AAshop',
      url: "#",
    },
    {
      backgroundImage: siemens,
      text: 'Healthcare platform for Siemens.',
      name: 'Siemens - healthcare platform',
      url: "https://www.siemens.com/global/en.html",
    },

  ],
  [
    {
      backgroundImage: sophia,
      text: 'Sophia shop from PSD to HTML responsive site.',
      name: 'Sophia Shop',
      url: "#",
    },
    {
      backgroundImage: tajamlandingpage,
      text: 'Tajam landing page from PSD to HTML responsive site.',
      name: 'Tajam landing page',
      url: "#",
    },
    {
      backgroundImage: cuda,
      text: 'Cuda PSD to HTML responsive site.',
      name: 'Cuda',
      url: "#",
    },
  ],
  [
    {
      backgroundImage: wings,
      text: 'Wings site revamp from scratch.',
      name: 'Wings',
      url: "https://wings.com.mx/en/",
    },
    {
      backgroundImage: eogresourcesSite,
      text: 'Main site for EOG Resources.',
      name: 'EOG - Main site',
      url: "https://www.eogresources.com/",
    },
    {
      backgroundImage: applaunch,
      text: 'Applaunch landing page from PSD to responsive HTML.',
      name: 'Applaunch',
      url: "#",
    },
  ],
  [
    {
      backgroundImage: citibanamexBancanetMovil,
      text: 'Citibanamex bancanet empresarial app.',
      name: 'Citibanamex',
      url: "https://www.banamex.com/",
    },
    {
      backgroundImage: pecan,
      text: 'Pecan Pipeline site for EOG Resources.',
      name: 'Pecan Pipeline',
      url: "https://www.pecanpipeline.com/",
    },
    {
      backgroundImage: lomelinApp,
      text: 'Lomelin Hybrid application for the sales advisors.',
      name: 'Lomelin - App',
      url: "https://www.lomelin.mx/",
    },
  ],
  [
    {
      backgroundImage: velvet,
      text: 'Velvet Boutique Natural ecommerce site.',
      name: 'Velvet',
      url: "https://velvetnatural.com.mx/",
    },
    {
      backgroundImage: lasEstacas,
      text: 'Las Estacas, natural park site.',
      name: 'lasEstacas',
      url: "https://lasestacas.com/",
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
      1024: {
        slidesPerView: 3,
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
      <BlockTitle
        title="Portfolio"
        text="You can see some of my work below:"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, backgroundImage, text, name, username, url }, _index) => (
              <TestimonialsCard
                backgroundImage={backgroundImage}
                image={image}
                text={text}
                name={name}
                key={name}
                username={username}
                url={url}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#505052',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
