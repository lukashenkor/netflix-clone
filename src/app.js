import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import * as ROUTES from './constants/routes';
import {
  Home,
  Browse,
  Signin,
  Signup,
} from './pages';
import {
  RequireAuth,
  UserLogged,
} from './helpers/routes';
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route element={ <UserLogged user={ user }/> }>
          <Route exact path={ ROUTES.HOME } element={ <Home/> }/>
          <Route exact path={ ROUTES.SIGN_IN } element={ <Signin/> }/>
          <Route exact path={ ROUTES.SIGN_UP } element={ <Signup/> }/>
        </Route>
        <Route element={ <RequireAuth user={ user }/> }>
          <Route exact path={ ROUTES.BROWSE } element={ <Browse/> }/>
        </Route>
      </Routes>
    </Router>
  );
}
