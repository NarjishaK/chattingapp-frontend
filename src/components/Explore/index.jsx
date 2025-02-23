import React, { useState } from "react";
import Footer from "../footer/Footer";
import Allprofile from "./allprofile";
import Newmatches from "./newmatch";
import Location from "./location";
import "./navbar.css";

const DefaultSlider = () => {
  const [activeTab, setActiveTab] = useState("all"); // Default to All Matches

  return (
    <>
      <div className="main-content">
        <div
          className="dashboard-breadcrumb dashboard-panel-header mb-30"
          style={{ justifyContent: "center", display: "block" }}
        >
          <div className="row">
            <div className="col-3">
              <p
                className={`navitem ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All Matches
                <hr />
              </p>
            </div>
            <div className="col-2">
              <p
                className={`navitem ${activeTab === "new" ? "active" : ""}`}
                onClick={() => setActiveTab("new")}
              >
                New Matches
                <hr />
              </p>
            </div>
            <div className="col-2">
            <p
                className={`navitem ${activeTab === "new1" ? "active" : ""}`}
                onClick={() => setActiveTab("new1")}
              >Location <hr /></p>
            </div>
            <div className="col-2">
            <p
                className={`navitem ${activeTab === "new2" ? "active" : ""}`}
                onClick={() => setActiveTab("new2")}
              >Profession <hr /></p>
            </div>
            <div className="col-3">
            <p
                className={`navitem ${activeTab === "new3" ? "active" : ""}`}
                onClick={() => setActiveTab("new3")}
              >Differently Abled <hr /></p>
            </div>
          </div>
        </div>

        {/* Conditional Rendering */}
        <div className="row swiper-slider-component">
          {activeTab === "all" && <Allprofile />}
          {activeTab === "new" && <Newmatches />}
          {activeTab === "new1" && <Location />}
          {activeTab === "new2" && <Location />}
          {activeTab === "new3" && <Location />}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DefaultSlider;
