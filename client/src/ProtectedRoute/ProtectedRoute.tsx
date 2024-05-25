import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = true;
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
