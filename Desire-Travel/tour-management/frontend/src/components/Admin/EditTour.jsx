import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const EditTour = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [photo, setPhoto] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [featured, setFeatured] = useState(false);
  const {
    data: tour,
    loading,
    error,
  } = useFetch(`http://localhost:4000/api/v1/tours/${id}`);

  useEffect(() => {
    if (tour) {
      setTitle(tour.title);
      setCity(tour.city);
      setAddress(tour.address);
      setDistance(tour.distance);
      setPhoto(tour.photo);
      setDesc(tour.desc);
      setPrice(tour.price);
      setMaxGroupSize(tour.maxGroupSize);
      setFeatured(tour.featured);
    }
  }, [tour]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/v1/tours/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          city,
          address,
          distance,
          photo,
          desc,
          price,
          maxGroupSize,
          featured,
        }),
      });

      if (response.ok) {
        alert("Tour updated successfully!");
        navigate(`/tours/${id}`);
      } else {
        alert("Error updating tour");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating tour");
    }
  };

  return (
    <div>
      <h1 className="text-center">Edit Tour</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <label>
            Distance:
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </label>
          <br />
          <label>
            Photo:
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <br />
          <label>
            Max Group Size:
            <input
              type="number"
              value={maxGroupSize}
              onChange={(e) => setMaxGroupSize(e.target.value)}
            />
          </label>
          <br />
          <label>
            Featured:
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
          </label>
          <br />
          <div className="d-flex justify-content-center">
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
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditTour;
