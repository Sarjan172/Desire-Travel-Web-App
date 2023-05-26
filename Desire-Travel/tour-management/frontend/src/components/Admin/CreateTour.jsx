import React, { useState } from "react";
import "./createtour.css";
import { useNavigate } from "react-router-dom";

function CreateTour() {
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    title: "",
    city: "",
    address: "",
    hotel1title: "",
    hotel2title: "",
    distance: "",
    photo: "",
    hotel1photo: "",
    hotel2photo: "",
    desc: "",
    price: "",
    hotel1price: "",
    hotel2price: "",
    maxGroupSize: "",
    hotel1loc: "",
    hotel2loc: "",
  });

  const handleChange = (event) => {
    setTour({ ...tour, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/v1/tours`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tour),
      });

      const data = await response.json();

      console.log(data); // assuming your server returns the newly created tour

      alert("Tour created successfully!");

      // Redirect to the tour page
      navigate(`/tours`);
    } catch (error) {
      console.error(error);
      alert("Error creating tour");
    }
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-12">
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-4 mt-5">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={tour.title}
              onChange={handleChange}
              required
            />
            <label htmlFor="hotelName">Name of the 1st Hotel</label>
            <input
              type="text"
              name="hotel1title"
              id="name"
              value={tour.hotel1title}
              onChange={handleChange}
              required
            />
            <label htmlFor="hotelName">Name of the 2nd Hotel</label>
            <input
              type="text"
              name="hotel2title"
              id="name"
              value={tour.hotel2title}
              onChange={handleChange}
              required
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={tour.city}
              onChange={handleChange}
              required
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={tour.address}
              onChange={handleChange}
              required
            />

            <label htmlFor="distance">Distance</label>
            <input
              type="number"
              name="distance"
              id="distance"
              value={tour.distance}
              onChange={handleChange}
              required
            />

            <label htmlFor="photo">Photo URL</label>
            <input
              type="text"
              name="photo"
              id="photo"
              value={tour.photo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-5 mt-5">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              value={tour.desc}
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={tour.price}
              onChange={handleChange}
              required
            />

            <label htmlFor="max-group-size">Maximum Group Size</label>
            <input
              type="number"
              name="maxGroupSize"
              id="max-group-size"
              value={tour.maxGroupSize}
              onChange={handleChange}
              required
            />
            <label htmlFor="max-group-size">Hotel1 Price</label>
            <input
              type="number"
              name="hotel1price"
              id="max-group-size"
              value={tour.hotel1price}
              onChange={handleChange}
              required
            />
            <label htmlFor="max-group-size">Hotel2 Price</label>
            <input
              type="number"
              name="hotel2price"
              id="max-group-size"
              value={tour.hotel2price}
              onChange={handleChange}
              required
            />
            <label htmlFor="max-group-size"> 1st Hotel Location</label>
            <input
              type="text"
              name="hotel1loc"
              id="max-group-size"
              value={tour.hotel1loc}
              onChange={handleChange}
              required
            />
            <label htmlFor="max-group-size"> 2nd Hotel Location</label>
            <input
              type="text"
              name="hotel2loc"
              id="max-group-size"
              value={tour.hotel2loc}
              onChange={handleChange}
              required
            />

            <label htmlFor="photo">1st hotel Photo URL</label>
            <input
              type="text"
              name="hotel1photo"
              id="photo"
              value={tour.hotel1photo}
              onChange={handleChange}
              required
            />

            <label htmlFor="photo">2nd hotel Photo URL</label>
            <input
              type="text"
              name="hotel2photo"
              id="photo"
              value={tour.hotel2photo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <button
            type="submit"
            style={{
              border: "none",
              width: "100px",
              backgroundColor: "orange",
              height: "30px",
              borderRadius: "10px",
            }}
          >
            Create Tour
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTour;
