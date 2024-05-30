import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../authContext";

const ProtectedRoutes = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }

  const { user } = context;
  console.log(user, "user");
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
