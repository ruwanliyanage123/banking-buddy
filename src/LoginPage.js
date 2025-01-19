import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log("Login success:", response);
    setIsLoggedIn(true);
    navigate("/landing");
  };

  const handleLoginFailure = (response) => {
    console.log("Login failed:", response);
    alert("Google Sign-In failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
