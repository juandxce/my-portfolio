import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import placeholderImage from 'assets/portfolioimages/placeholderwork.jpg';
import AAshop from 'assets/portfolioimages/aashop.png';
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
      url: "https://user-images.githubusercontent.com/23223305/132113968-900f6f2a-2db8-47cd-9dc8-8bcfb25f9c67.png",
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
      url: "https://raw.githubusercontent.com/juandxce/Shophia-psd-to-html/master/images/Shopia-design.jpg",
    },
    {
      backgroundImage: tajamlandingpage,
      text: 'Tajam landing page from PSD to HTML responsive site.',
      name: 'Tajam landing page',
      url: "https://cdn.rawgit.com/juandxce/Tajem-landing-page/9376c89c/index.html",
    },
    {
      backgroundImage: cuda,
      text: 'Cuda PSD to HTML responsive site.',
      name: 'Cuda',
      url: "https://cdn.rawgit.com/juandxce/cuda-single-page/55918b21/index.html",
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
      url: "https://rawgit.com/juandxce/appLaunchTemplate/master/index.html",
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
                key={_index}
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
