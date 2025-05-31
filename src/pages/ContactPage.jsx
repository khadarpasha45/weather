import React from "react";
import ContactForm from "../Components/contact/ContactForm";
import { useSession } from "../Hooks/Session";
import { useNavigate } from "react-router-dom";
import Button from "../Components/common/Button";

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
