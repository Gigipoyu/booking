import React, { useEffect, useState } from "react";
import data from "./hotels.json";
import "../Components/Card.css";

const Card = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    setHotels(data);
  }, []);

  return (
    <div className="gen">
      {hotels.map((element, index) => (
        <div className="card">
          <li>
            <img src={element.image} className="image" />
          </li>
          <li className="name" style={{ color: "#4caf50" }}>
            {" "}
            {element.name}
          </li>
          <li> {element.location}</li>
          <li> ${element.price} per nigth</li>

          <li>
            {element.available === true ? (
              <p>available</p>
            ) : (
              <p>not available</p>
            )}
          </li>

          <button className="btn" style={{ color: "white" }}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
