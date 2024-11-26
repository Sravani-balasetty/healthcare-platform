import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download-container">
      <div className="left-section">
        {/* Replace with your image paths */}
        <div className="main-image" >
          <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="Doctor" />
        </div>
      </div>
      <div className="right-section">
        <h2>Download the Practo app</h2>
        <p>
          Access video consultation with India’s top doctors on the Practo app.
          Connect with doctors online, available 24/7, from the comfort of your
          home.
        </p>
        <form className="phone-form">
          <div className="phone-input">
            <span>+91</span>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <button type="button" className="send-sms-button">
            Send SMS
          </button>
        </form>
        <div className="download-buttons">
          <button className="google-play-button">Google Play</button>
          <button className="app-store-button">App Store</button>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
