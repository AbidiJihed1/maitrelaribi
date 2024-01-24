import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SocialMediaIcons from './components/SocialMediaIcons.js';
import Presentation from './components/Presentation.js';
import Flags from './services/Services.js';
import Maps from './components/Maps.js';
import About from './components/About.js'
import Formation from './components/Formation.js'
import ConsultationComponent from './services/Consultation.js';
import HonorairesPolitiqueComponent from './services/HonorairePolitique.js';
const Home = () => {
  const carouselImages = [
    'https://www.griffith.ie/sites/default/files/styles/blog_header/public/storage/law%20blog%20header.jpg.webp?itok=baj9oljR',
    'https://www.sharda.ac.in/blog/attachments/blog_images/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-min.jpg',
    'https://esplinweight.com/wp-content/uploads/2020/01/89770471_m.jpg',
    'https://images.shiksha.com/mediadata/images/articles/1652105078phpaUJONK.jpeg',
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of the carousel
  };

  return (
    <div style={{ position: 'relative' }}>
      <SocialMediaIcons />
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-image-${index}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
      <About />
      <Flags />
      <Formation />
      <ConsultationComponent/>
      <HonorairesPolitiqueComponent />
      <div style={{display:"flex",justifyContent:"center"}}>
      <h2>Trouver Nous</h2>
      </div>
     <div style={{display:'flex',justifyContent:'center',margin:'25px'}}>
     <Maps />
     </div>
     
    </div>
  );
};

export default Home;