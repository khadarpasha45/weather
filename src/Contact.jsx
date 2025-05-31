import React from "react";
import { useSession } from "./Hooks/Session";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { user, logout } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Welcome, {user}!</p>
      <form>
        <input type="text" placeholder="Your Name" required /><br />
        <input type="email" placeholder="Your Email" required /><br />
        <textarea placeholder="Your Message" required /><br />
        <button type="submit">Send</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Contact;
