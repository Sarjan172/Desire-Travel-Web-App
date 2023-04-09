import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava01.jpg";
import ava02 from "../../assets/images/ava02.jpeg";
import ava03 from "../../assets/images/ava03.jpg";
import ava04 from "../../assets/images/ava04.jpeg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          I recently used this travel web app to plan my trip to Nepal and it
          was the best decision I made! The app had a lot of options for hotels
          and activities in Nepal, and I was able to easily find the best deals
          for my budget. I loved the fact that the app also provided me with
          useful information and tips about traveling to Nepal, such as the best
          time to visit and what to pack. Overall, my trip to Nepal was amazing
          and the app made my trip planning process so much easier. I would
          definitely recommend this app to anyone planning a trip to Nepal.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I had an incredible experience using this travel web app to plan my
          trip to Nepal! The app provided me with all the information I needed
          about flights, hotels, and activities in Nepal, and I was able to
          easily book everything through the app. The customer service team was
          also very responsive and helpful whenever I had any questions. During
          my trip to Nepal, I visited some of the most beautiful places I've
          ever seen, and made my planning process so much smoother. I highly
          recommend it to anyone planning a trip to Nepal.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Riya Miller</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I cannot recommend this travel web app enough for anyone planning a
          trip to Nepal! The app has a lot of options for flights, hotels, and
          activities in Nepal, and I was able to find the perfect itinerary for
          my trip. I loved how the app also provided me with insider tips and
          local recommendations that made my trip to Nepal even more special.
          The app also had a user-friendly interface that made it easy to
          navigate and book everything I needed for my trip. I had an
          unforgettable trip to Nepal thanks to this app.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">David Smith</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I recently used this travel web app to plan a trekking adventure in
          Nepal and it exceeded all my expectations! The app had a lot of
          options for trekking routes, guides, and equipment rental, and I was
          able to easily customize my trip to fit my preferences and budget. The
          app also provided me with all the information I needed about trekking
          in Nepal, such as the difficulty level of each route and what gear to
          bring. I highly recommend this app to anyone planning a trekking
          adventure in Nepal.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Elisha Beckham</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
