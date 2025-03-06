// Step3.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/slices/userSlice";
import Stepper from "./stepper";

const Step3 = ({ nextStep }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  
  const [formData, setFormData] = useState({
    height: userData.height || "",
    weight: userData.weight || "",
    maritalStatus: userData.maritalStatus || "",
    physicallyChallenged: userData.physicallyChallenged || "",
    state: userData.state || "",
    location: userData.location || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (value) => {
    setFormData({ ...formData, physicallyChallenged: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to Redux store
    dispatch(setUser({ ...userData, ...formData }));
    nextStep();
  };

  return (
    <>
      <div className="bottom">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="Weight" 
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <br />

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select 
              className="form-select"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>
          </div>
          
          <b style={{fontSize:"small"}}>Physically Challenged?</b>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input 
                    type="radio" 
                    name="physicallyChallenge"
                    checked={formData.physicallyChallenged === "Yes"}
                    onChange={() => handleRadioChange("Yes")}
                  />
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Yes"
                  disabled
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input 
                    type="radio" 
                    name="physicallyChallenge"
                    checked={formData.physicallyChallenged === "No"}
                    onChange={() => handleRadioChange("No")}
                  />
                </div>
                <input type="text" className="form-control" placeholder="No" disabled />
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
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Location" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <br />

          <button 
            type="submit"
            className="btn btn-success w-100 login-btn"
            disabled={!formData.height || !formData.weight || !formData.maritalStatus || !formData.physicallyChallenged || !formData.state || !formData.location}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Step3;
