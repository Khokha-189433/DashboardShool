import React from "react";
import { Navigate } from "react-router-dom";

const Start = () => {
  if (sessionStorage.getItem("token")) return <Navigate to="/home" />;
  else return <Navigate to="/login" />;
};

export default Start;
