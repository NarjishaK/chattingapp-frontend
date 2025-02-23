import React from "react";
import Stepper from "./stepper"; // Import the Stepper component

const Step2 = ({nextStep}) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission (optional)
        nextStep(); // Move to Step 2
      };
  return (
    <>
      {/* Stepper Component */}
      <Stepper currentStep={1} />

      <div className="bottom">
        <form onSubmit={handleSubmit}> 
          <div className="input-group mb-25">
            <span className="input-group-text">
              <b>DOB</b>
            </span>
            <input type="date" className="form-control" placeholder="Date of Birth" />
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select className="form-select">
              <option selected>Select Your Religion</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-flag "></i>
            </span>
            <select className="form-select">
              <option selected>Select Your Nationality</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="input-group mb-20">
            <span className="input-group-text">
              <i className="fa-regular fa-lock"></i>
            </span>
            <input type="password" className="form-control" placeholder="Set Password" />
          </div>

          <button className="btn btn-success w-100 login-btn">Next</button>
        </form>
      </div>
    </>
  );
};

export default Step2;
