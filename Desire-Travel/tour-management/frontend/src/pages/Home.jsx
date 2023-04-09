import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import world from '../assets/images/world.png'
import img6 from '../assets/images/img6.jpg'
import img1 from '../assets/images/img1.webp'
import img2 from '../assets/images/img2.jpg'
import experienceImg from '../assets/images/experience.png';
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../service/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



const Home = () => {
  return (
    <>
    {/*-------------hero section start-------------*/}
      
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Unplanned tour is the best form of tour'}/>
                  <img src={world} alt=""/>
                </div>
                <h1>Travel is the only thing you buy that makes you {""}<span className="highlight">richer</span></h1>
                <p>
                Unlike material possessions that may bring temporary happiness, 
                traveling provides an opportunity to experience new cultures, 
                meet new people, and create unforgettable memories that can last a lifetime. 
                Through travel, individuals can broaden their perspectives, gain new insights, 
                and discover more about themselves and the world around them. 
                These experiences can enrich one's life in ways that cannot be measured by material possessions or wealth. 
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={img2} alt=""/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <img src={img6} alt=""/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={img1} alt=""/>
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>


        <section>
          {/*-------------hero section start-------------*/}
        </section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      {/*-------------featured tour section start-------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
                <h2 className="featured__tour-title">Our featured tours</h2>         
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/*-------------featured tour section start-------------*/}
      
      {/*-------------experience section start-------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>

                <h2>With our all experience <br/> we will serve you</h2>
                <p>
                A well-designed travel website that help users navigate more easily.
                <br/>
                It provides important information about the desired place.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Sucessfull Trip</h6>
                </div>
              
              <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular client</h6>
                
              </div>
              <div className="counter__box">
                  <span>5</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>  
      {/*-------------experience section start-------------*/}

      {/*-------------gallery section start-------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>  
      {/*-------------gallery section start-------------*/}

      {/*-------------testimonial section start-------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Users Love'}/>
              <h2 className="testimonial__title">
                What our users say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>

      {/*-------------testimonial section start-------------*/}
      <Newsletter/>
    </>
  );
};

export default Home;
