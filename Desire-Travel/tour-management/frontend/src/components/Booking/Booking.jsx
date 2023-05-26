import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, Button, ListGroupItem } from "reactstrap";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const {
    price,
    reviews,
    title,
    hotel1title,
    hotel2title,
    hotel1photo,
    hotel2photo,
    hotel1price,
    hotel2price,
    hotel1loc,
    hotel2loc,
  } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
    hotel1title: "",
    hotel2title: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  //send data to the server
  const handleClick = async (e) => {
    e.preventDefault();

    console.log(booking);

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }

      const res = await fetch(`http://localhost:4000/api/v1/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/*------------------booking form----------------*/}
      <div className="booking__form">
        <h5>Information</h5>
        <Form
          style={{ transform: "translateX(-100px)" }}
          className="bookng__info-form"
          onSubmit={handleClick}
        >
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="No. of Guests"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Hotel"
              id="hotel1title"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/*------------------booking end----------------*/}

      {/*------------------booking bottom----------------*/}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-fill"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <div className="row">
          <div className="col-12">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={hotel1photo}
                    class="img-fluid rounded-start"
                    alt=""
                    style={{ height: "200px" }}
                  />
                  <input
                    class="form-check-input ms-3 my-1"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  ></input>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{hotel1title}</h5>
                    <p class="card-text">{hotel1loc}</p>
                    <p class="card-text"> ${hotel1price}</p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={hotel2photo}
                    class="img-fluid rounded-start"
                    alt="..."
                    style={{ height: "200px" }}
                  />
                  <input
                    class="form-check-input ms-3 my-1"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  ></input>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{hotel2title}</h5>
                    <p class="card-text">{hotel2loc}</p>
                    <p class="card-text"> ${hotel2price}</p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className="btn-primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
