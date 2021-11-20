import React from "react";
import "../Styles/Navbar.css";

interface NavbarProps {
  names: string[];
  setIndex: (index: number) => void;
  current: number;
}

export const Navbar: React.FC<NavbarProps> = ({ names, setIndex, current }) => {
  return (
    <nav className="nav">
      <div className="line"></div>
      {names.map((name, index) => {
        return (
          <button
            key={index}
            className={`btn ${index === current && "active-btn"}`}
            onClick={() => setIndex(index)}>
            {name}
          </button>
        );
      })}
    </nav>
  );
};
