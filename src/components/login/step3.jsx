import React from "react";
import Stepper from "./stepper"; // Import the Stepper component

const Step3 = ({nextStep}) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission (optional)
        nextStep(); // Move to Step 2
      };
  return (
    <>
      {/* Stepper Component */}
      <Stepper currentStep={2} />

      <div className="bottom">
        <form onSubmit={handleSubmit}>
        <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Height"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Weight" />
              </div>
            </div>
          </div>
          <br />

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select className="form-select">
              <option selected>Select Marital Status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <b style={{fontSize:"small"}}>Physically Challenged?</b>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input type="radio" />
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Yes"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input type="radio" value="Men" placeholder="Men" />
                </div>
                <input type="text" className="form-control" placeholder="No" />
              </div>
            </div>
          </div>
          <br />
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Location" />
              </div>
            </div>
          </div>
          <br />

          <button className="btn btn-success w-100 login-btn">Next</button>
        </form>
      </div>
    </>
  );
};

export default Step3;
