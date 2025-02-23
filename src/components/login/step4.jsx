import React from "react";
import Stepper from "./stepper"; // Import the Stepper component
import { Link } from "react-router-dom";

const Step3 = () => {
  return (
    <>
      {/* Stepper Component */}
      <Stepper currentStep={3} />

      <div className="bottom">
        <form>
        <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select className="form-select">
              <option selected>Higher Education</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div> <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select className="form-select">
              <option selected>Course</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select className="form-select">
              <option selected>profession</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select className="form-select">
              <option selected>Select Your Financial Status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-group mb-20">
            <span className="input-group-text">
              <i className="fa-regular fa-note"></i>
            </span>
            <textarea type="text" className="form-control" placeholder="profile description" />
          </div>

          <button className="btn btn-success w-100 login-btn"><Link to ="/" style={{textDecoration:"none", color:"white"}} >Complete</Link></button>
        </form>
      </div>
    </>
  );
};

export default Step3;
