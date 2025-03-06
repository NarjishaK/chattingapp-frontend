
// Step1.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/slices/userSlice";

const Step1 = ({ nextStep }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.user.userData);
  
  const [formData, setFormData] = useState({
    profileFor: userData.profileFor || "",
    name: userData.name || "",
    phone: userData.phone || "",
    gender: userData.gender || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
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
        <h5 className="panel-title">Register Now - it's free!</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input 
                    type="radio" 
                    name="genderRadio"
                    checked={formData.gender === "Women"}
                    onChange={() => handleGenderChange("Women")}
                  />
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Women"
                  disabled
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input 
                    type="radio" 
                    name="genderRadio"
                    checked={formData.gender === "Men"}
                    onChange={() => handleGenderChange("Men")}
                  />
                </div>
                <input type="text" className="form-control" placeholder="Men" disabled />
              </div>
            </div>
          </div>
          <br />
          <div className="input-group mb-25">
            <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
            <select 
              className="form-select" 
              name="profileFor" 
              value={formData.profileFor} 
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Profile for</option>
              <option value="self">Self</option>
              <option value="parent">Parent</option>
            </select>
          </div>

          <div className="input-group mb-25">
            <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-20">
            <span className="input-group-text"><i className="fa-regular fa-phone"></i></span>
            <input 
              type="tel" 
              className="form-control" 
              name="phone" 
              placeholder="Phone" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button 
            type="submit"
            className="btn btn-success w-100 login-btn" 
            disabled={loading || !formData.gender || !formData.profileFor || !formData.name || !formData.phone}
          >
            {loading ? "Processing..." : "Next"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Step1;
