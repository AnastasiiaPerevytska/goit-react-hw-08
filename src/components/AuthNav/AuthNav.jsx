import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./AuthNav.module.css"

const AuthNav = () => {
  return (
    <div className={styles.wrap}>
      <Button color="inherit" component={Link} to="/login">
        Log in
      </Button>
      <Button color="inherit" component={Link} to="/register">
        Registration
      </Button>
    </div>
  );
};

export default AuthNav;
