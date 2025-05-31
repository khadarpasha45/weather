import React from "react";
import ContactForm from "../contact/ContactForm";
import { useSession } from "../../Hooks/useSession";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const ContactPage = () => {
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
      <ContactForm />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default ContactPage;
