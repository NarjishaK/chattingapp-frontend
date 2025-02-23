import React from 'react';

const EditProfileContent = () => {
  return (
    <form>
      <div className="profile-edit-tab-title">
        <h6>Public Information</h6>
      </div>
      <div className="public-information mb-30">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="admin-profile">
              <div className="image-wrap">
                <div className="part-img rounded-circle overflow-hidden">
                  <img src="assets/images/admin.png" alt="admin" />
                </div>
                <button className="image-change">
                  <i className="fa-light fa-camera" />
                </button>
              </div>
              <span className="admin-name">Mitchell C. Shay</span>
              <span className="admin-role">Muslim</span>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-light fa-user" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value="Mitchell C. Shay"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-light fa-at" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value="@mitchellc"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-12">
                <textarea
                    className="form-control h-150-p"
                    placeholder="Biography"
                    value="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
                    readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-edit-tab-title">
        <h6>Private Information</h6>
      </div>
      <div className="private-information mb-30">
        <div className="row g-3">
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-user" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Unique ID"
                value="1D233"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-light fa-user-tie" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Religion</option>
                <option value="0">Muslim</option>
                <option value="1">Hindu</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-light fa-circle-check" />
              </span>
              <select className="form-control" defaultValue="">
                <option value="">Status</option>
                <option value="0" defaultValue>
                  Enable
                </option>
                <option value="1">Disable</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-user" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Marital status</option>
                <option value="0">Married</option>
                <option value="1">Single</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-phone" />
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                value="+0 123 456 789"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-location" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
               <b>DOB</b>
              </span>
              <input
                type="date"
                className="form-control"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-flag" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Nationality</option>
                <option value="0">India</option>
                <option value="1">Afganistan</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-map" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Destrict</option>
                <option value="0">Kerala</option>
                <option value="1">Uthar Predhesh</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-coins" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Financial status</option>
                <option value="0">Wealthy Family</option>
                <option value="1">Middle class</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-wheelchair" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Physically Challenged</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 col-sm-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-meter" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Height"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-2 col-sm-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-weight" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Weight"
                readOnly
              />
            </div>
          </div>
          <br/>
        </div>
      </div>
      <div className="profile-edit-tab-title">
        <h6>Basic Information</h6>
      </div>
      <div className="social-information">
        <div className="row g-3">
          <div className="col-sm-4">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-books" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Higher Education </option>
                <option value="0">Degree</option>
                <option value="1">Plus 2</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-book " />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Course</option>
                <option value="0">BA</option>
                <option value="1">BBA</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-calendar" />
              </span>
              <input
                type="date"
                className="form-control"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-computer " />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Profession</option>
                <option value="0">Web Developer</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-location" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder='Address'
                readOnly
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfileContent;
