import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')

  if (!TOKEN) return <Navigate replace to="/login" />;
  
  // if (requestInfo.loading) return <Loading />
  
  return <Outlet />
};

export default PrivateRoute;