import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
// import './service-card.css';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import geoImg from '../assets/images/geo.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "The temperature and humidity of the desired location are included in this element.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "User manuals, tutorials, FAQs, help centres, and customer support services.",
    },
    {
        imgUrl: geoImg,
        title: "Geolocation",
        desc: "This function allows users to pinpoint their exact position which is  performed via GPS and Wi-Fi.",
    },
]



const ServiceList = () => {
  return(
  <>
  {
    servicesData.map((item, index) => (
    <Col lg='3' key={index}>
        <ServiceCard item={item}/>
    </Col>
    ))}
  </>
  );
};


export default ServiceList;