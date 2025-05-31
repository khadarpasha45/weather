import React from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "../Hooks/Session";

const ProtectedRoute = ({ children }) => {
  const { user } = useSession();

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
