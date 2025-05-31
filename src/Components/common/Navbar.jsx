import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../../hooks/useSession";

const Navbar = () => {
  const { user, logout } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>MyApp</h2>
      <div>
        {user ? (
          <>
            <span style={styles.welcome}>Welcome, {user}!</span>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/" style={styles.link}>Login</Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  welcome: {
    marginRight: "15px",
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
