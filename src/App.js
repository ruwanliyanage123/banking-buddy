import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { login } from "./http-service";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/landing"
            element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/landing" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const data = await login(username, password);
      console.log("Login data:", data);
      if (data.length > 0 && data.split(".").length === 3) {
        setIsLoggedIn(true);
        navigate("/landing");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("An error occurred during login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
