import Signin from "./Authentication/Signin";
import SignupForm from "./Authentication/Signup";
import ProtectedRoutes from "./ProtectedRoute/ProtectedRoute";
import Test from "./pages/test";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
