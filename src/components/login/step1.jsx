
// Step1.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/slices/userSlice";

const Step1 = ({ nextStep }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.user.userData);
  const [errors, setErrors] = useState({});

  //validation
  const validateField = (name, value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `${name} is required`;
    } else {
      if (name === "phone" && !/^\d{10}$/.test(value)) {
        errorMessage = "Phone number must be 10 digits";
      }
    }
    return errorMessage;
  };
  const [formData, setFormData] = useState({
    profileFor: userData.profileFor || "",
    name: userData.name || "",
    phone: userData.phone || "",
    gender: userData.gender || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
     // Validate field in real-time
     setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
    setErrors((prevErrors) => ({
      ...prevErrors,
      gender: gender ? "" : "Gender is required",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


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
          {errors.gender && <p className="text-danger">{errors.gender}</p>}

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
          {errors.profileFor && <p className="text-danger">{errors.profileFor}</p>}


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
          {errors.name && <p className="text-danger">{errors.name}</p>}

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
          {errors.phone && <p className="text-danger">{errors.phone}</p>}

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
