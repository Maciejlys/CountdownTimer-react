import React from "react";
import "../Styles/Loading.css";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="loading">
      <div className="loader"></div>
      <h1>Loading</h1>
    </div>
  );
};
