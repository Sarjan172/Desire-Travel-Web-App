import React, { useState } from "react";
import "./createtour.css";
import { useNavigate } from "react-router-dom";

function CreateTour() {
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    photo: "",
    desc: "",
    price: "",
    maxGroupSize: "",
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={tour.title}
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

      <button type="submit">Create Tour</button>
    </form>
  );
}

export default CreateTour;
