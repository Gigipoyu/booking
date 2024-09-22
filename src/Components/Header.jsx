import React from "react";
import "../Components/Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="general_header">
      <div className="left_general">Hotel Booking App</div>
      <div className="rigth_general">
        <Link>
          <li>Home</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
