import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const AuthCtx = useContext(AuthContext);
  const isLogin = AuthCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLogin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLogin && (
            <li>
              <button onClick={AuthCtx.logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
