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
      <h1>All Tours</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>City</th>
              <th>Address</th>
              <th>Distance</th>
              <th>Price</th>
              <th>Max Group Size</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id}>
                <td>{tour.title}</td>
                <td>{tour.city}</td>
                <td>{tour.address}</td>
                <td>{tour.distance}</td>
                <td>{tour.price}</td>
                <td>{tour.maxGroupSize}</td>
                <td>{tour.featured ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => handleEdit(tour._id)}>Edit</button>
                  <button onClick={() => handleDelete(tour._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllTours;
