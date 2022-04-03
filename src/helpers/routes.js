import { useLocation, Navigate, Outlet } from "react-router-dom";
import * as ROUTES from '../constants/routes';

export const RequireAuth = ({ user }) => {
  const location = useLocation();
  return (
    user
      ? <Outlet/>
      : <Navigate to={ ROUTES.SIGN_IN } state={ { from: location } } replace/>
  );
};


export const UserLogged = ({ user}) => {
  const location = useLocation();
  return (
    user
      ? <Navigate to={ROUTES.BROWSE}  state={ { from: location } } replace/>
      : <Outlet />
  )
}