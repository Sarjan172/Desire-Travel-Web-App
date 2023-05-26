import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const AllTours = () => {
  const navigate = useNavigate();
  const {
    data: tours,
    loading,
    error,
  } = useFetch(`http://localhost:4000/api/v1/tours`);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/tours/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Tour deleted successfully!");
        navigate("/tours");
      } else {
        alert("Error deleting tour");
      }
    } catch (error) {
      console.error(error);
      alert("Error deleting tour");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edittours/${id}`);
  };

  return (
    <div>
      <h1 className="text-center my-5">All Tours</h1>
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
                <th style={{ border: "1px solid black", padding: "10px" }}>Title</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>City</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Address</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Distance</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Price</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Max Group Size</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Featured</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ borderBottom: "1px solid black" }}>
              {tours.map((tour) => (
                <tr
                  style={{ border: "1px solid black", padding: "10px" }}
                  key={tour._id}
                >
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {tour.title}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {tour.city}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {tour.address}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {tour.distance}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {tour.price}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {tour.maxGroupSize}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {tour.featured ? "Yes" : "No"}
                  </td>
                  <td>
                    <button
                      className="ms-3 pb-1"
                      style={{
                        border: "none",
                        backgroundColor: "orange",
                        width: "80px",
                        height: "30px",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleEdit(tour._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="mx-3"
                      style={{
                        border: "none",
                        backgroundColor: "#ff726f",
                        color: "white",
                        width: "80px",
                        height: "30px",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleDelete(tour._id)}
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

export default AllTours;
