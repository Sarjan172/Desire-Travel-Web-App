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
      <h1 className="text-center my-5">All Booking</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="d-flex justify-content-center">
          <table
            style={{ borderCollapse: "collapse", border: "1px solid black" }}
          >
            <thead style={{ borderBottom: "1px solid black" }}>
              <tr style={{ borderBottom: "1px solid black" }}>
                <th
                  style={{ border: "1px solid black", padding: "10px" }}
                  className="mx-5"
                >
                  User Email
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Tour Name
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Full Name
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Guest Size
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Phone
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Hotel
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody style={{ borderBottom: "1px solid black" }}>
              {books.map((book) => (
                <tr
                  style={{ border: "1px solid black", padding: "10px" }}
                  key={book._id}
                  className="px-4"
                >
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {book.userEmail}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {book.tourName}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {book.fullName}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {book.guestSize}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {book.phone}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {book.hotel1title}
                  </td>
                  <td>
                    <button
                      className="my-2 pb-1 mx-3"
                      style={{
                        border: "none",
                        backgroundColor: "#ff726f",
                        width: "80px",
                        height: "30px",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingTable;
