import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BookingTable = () => {
  const navigate = useNavigate();

  const {
    data: books,
    loading,
    error,
  } = useFetch(`http://localhost:4000/api/v1/booking`);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/booking/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Booking deleted successfully!");
        navigate("/tours");
      } else {
        alert("Error deleting booking");
      }
    } catch (error) {
      console.error(error);
      alert("Error deleting booking");
    }
  };

  return (
    <div>
      <h1>All Booking</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User Email</th>
              <th>Tour Name</th>
              <th>Full Name</th>
              <th>Guest Size</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.userEmail}</td>
                <td>{book.tourName}</td>
                <td>{book.fullName}</td>
                <td>{book.guestSize}</td>
                <td>{book.phone}</td>
                <td>
                  <button onClick={() => handleDelete(book._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingTable;
