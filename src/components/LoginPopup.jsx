import React, { useState } from "react";
import "./LoginPopup.css";

function LoginPopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="login-container">
      <button className="login-btn" onClick={() => setShowPopup(true)}>
        Login
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Submit</button>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPopup;
