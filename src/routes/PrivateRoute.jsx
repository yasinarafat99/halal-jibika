import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firbase/firbase.config";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      return Swal.fire({
        title: "Plese signup in first",
        icon: "warning",
      });
    }
  }, []);

  if(loading){
    return <h2>Loading data...</h2>
  }

  if (!user) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }
  return <>{children}</>;

  
};

export default PrivateRoute;
