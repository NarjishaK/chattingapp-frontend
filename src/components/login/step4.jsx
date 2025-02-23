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
        <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
              <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select className="form-select">
              <option selected>Higher Education</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
              <span className="input-group-text">
              <i className="fa-regular fa-book"></i>
            </span>
            <select className="form-select">
              <option selected>Course</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
                </div>
            </div>
          </div>
          <br />

          <div className="input-group mb-20">
            <span className="input-group-text">
              <i className="fa-regular fa-calendar"></i>
            </span>
            <input type="date" className="form-control" placeholder="Present" value="present" />
            </div>

            <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
              <span className="input-group-text">
              <i className="fa-regular fa-computer"></i>
            </span>
            <select className="form-select" style={{height:"49px"}}>
              <option selected>profession</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
              <span className="input-group-text">
              <i className="fa-regular fa-location"></i>
            </span>
            <input type="text" className="form-control" placeholder="Location" />
                </div>
            </div>
          </div>
          <br />

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
