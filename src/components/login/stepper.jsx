import React from "react";
import "./stepper.css"; // Create a CSS file for styling

const Stepper = ({ currentStep }) => {
  const steps = [
    "Account Setup",
    "Personal Details",
    "Basic Information",
    // "Education and Location",
    // "Self Description",
  ];

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index + 1 <= currentStep ? "active" : ""}`}>
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{step}</div>
          {index !== steps.length - 1 && <div className="step-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
