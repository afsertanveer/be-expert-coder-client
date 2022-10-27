import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
  console.log("private route: ",loading);
  console.log(location);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="grow" variant="danger" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;