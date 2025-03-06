
// Step2.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/slices/userSlice";
import Stepper from "./stepper";

const Step2 = ({ nextStep }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  
  const [formData, setFormData] = useState({
    dob: userData.dob || "",
    religion: userData.religion || "",
    nationality: userData.nationality || "",
    email: userData.email || "",
    password: userData.password || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <div className="input-group mb-25">
            <span className="input-group-text">
              <b>DOB</b>
            </span>
            <input 
              type="date" 
              className="form-control" 
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-globe"></i>
            </span>
            <select 
              className="form-select"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Your Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Jain">Jain</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-flag"></i>
            </span>
            <select 
              className="form-select"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Your Nationality</option>
              <option value="Indian">Indian</option>
              <option value="American">American</option>
              <option value="Canadian">Canadian</option>
              <option value="British">British</option>
              <option value="Australian">Australian</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-20">
            <span className="input-group-text">
              <i className="fa-regular fa-lock"></i>
            </span>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Set Password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button 
            type="submit"
            className="btn btn-success w-100 login-btn"
            disabled={!formData.dob || !formData.religion || !formData.nationality || !formData.email || !formData.password}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Step2;

