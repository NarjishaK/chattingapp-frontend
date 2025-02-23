import React from "react";

const LoginContent3 = ({nextStep}) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission (optional)
        nextStep(); // Move to Step 2
      };
  return (
    <>
      <div className="bottom">
        <h5 className="panel-title">Register Now - its free!</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input type="radio" />
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Women"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-text">
                  <input type="radio" value="Men" placeholder="Men" />
                </div>
                <input type="text" className="form-control" placeholder="Men" />
              </div>
            </div>
          </div>
          <br />
          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-user"></i>
            </span>
            <select className="form-select">
              <option selected>Select Profile for</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group mb-25">
            <span className="input-group-text">
              <i className="fa-regular fa-user"></i>
            </span>
            <input type="text" className="form-control" placeholder="Name  " />
          </div>
          <div className="input-group mb-20">
            <span className="input-group-text">
              <i className="fa-regular fa-phone"></i>
            </span>
            <input type="tel" className="form-control" placeholder="Phone" />
          </div>
          <div className="d-flex justify-content-between mb-25">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheckbox"
              />
              <label
                className="form-check-label text-white"
                for="loginCheckbox"
              >
                By clicking register free, you accept our T&C and Privacy Policy
              </label>
            </div>
          </div>
          <button className="btn btn-success w-100 login-btn">
            Register Free
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginContent3;
