
// Step4.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Stepper from "./stepper";
import { registerUser } from "../Redux/handle-api";

const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const { loading, error } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    higherEducation: userData.higherEducation || "",
    course: userData.course || "",
    passOutDate: userData.passOutDate || "",
    profession: userData.profession || "",
    company: userData.company || "",
    financialStatus: userData.financialStatus || "",
    about: userData.about || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine all form data and submit to the server
    const finalUserData = {
      ...userData,
      ...formData
    };
    
    dispatch(registerUser(finalUserData))
      .unwrap()
      .then(() => {
        // Registration successful, navigate to home
        navigate('/');
      })
      .catch((err) => {
        // Error is handled in the redux slice
        console.error("Registration failed:", err);
      });
  };

  return (
    <>
      <div className="bottom">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-regular fa-globe"></i>
                </span>
                <select 
                  className="form-select"
                  name="higherEducation"
                  value={formData.higherEducation}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Higher Education</option>
                  <option value="High School">High School</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-regular fa-book"></i>
                </span>
                <select 
                  className="form-select"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Course</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Business">Business</option>
                  <option value="Arts">Arts</option>
                  <option value="Science">Science</option>
                </select>
              </div>
            </div>
          </div>
          <br />

          <div className="input-group mb-20">
            <span className="input-group-text">
              <i className="fa-regular fa-calendar"></i>
            </span>
            <input 
              type="date" 
              className="form-control" 
              placeholder="Graduation Date" 
              name="passOutDate"
              value={formData.passOutDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-regular fa-computer"></i>
                </span>
                <select 
                  className="form-select" 
                  style={{height:"49px"}}
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Profession</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Business">Business</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-regular fa-location"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Company" 
                  name="company"
                  value={formData.company}
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
              name="financialStatus"
              value={formData.financialStatus}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Your Financial Status</option>
              <option value="Below 5 LPA">Below 5 LPA</option>
              <option value="5-10 LPA">5-10 LPA</option>
              <option value="10-15 LPA">10-15 LPA</option>
              <option value="15-25 LPA">15-25 LPA</option>
              <option value="Above 25 LPA">Above 25 LPA</option>
            </select>
          </div>

          <div className="input-group mb-20">
            <span className="input-group-text">
              <i className="fa-regular fa-note"></i>
            </span>
            <textarea 
              className="form-control" 
              placeholder="Profile description" 
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button 
            type="submit"
            className="btn btn-success w-100 login-btn"
            disabled={loading || !formData.higherEducation || !formData.course || !formData.passOutDate || !formData.profession || !formData.company || !formData.financialStatus || !formData.about}
          >
            {loading ? "Registering..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Step4;
