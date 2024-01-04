import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firbase/firbase.config";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: "Plese sign in first",
        icon: "warning",
      });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/Signup" state={{ from: location }} replace />;
  }
  return <>{children}</>;

  
};

export default PrivateRoute;
