import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = false;
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
