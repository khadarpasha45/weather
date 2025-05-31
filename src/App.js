import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Contact from "./Contact";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import { SessionProvider } from "./Hooks/useSession";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <SessionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                {/* <Contact /> */}
                <ContactPage/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </SessionProvider>
  );
};

export default App;
