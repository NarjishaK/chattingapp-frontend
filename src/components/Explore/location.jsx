import React from "react";
import { FaEye } from "react-icons/fa";
import "./navbar.css"
import img1 from "../../../public/assets/images/img1.svg"
import "./navbar.css"
const NewMatches = () => {
  return (
    <div style={styles.container}>
      <img 
        src={img1}
        alt="Profile Hidden" 
        className="img-img" 
      />
      <p style={{marginTop: "20px"}}>
        Your profile is currently hidden, so you cannot view new profiles. 
        To explore new profiles, you must unhide your profile or enable Invisible Mode.
      </p>
      <button className="btn btn-success" id="buttonn">
        <FaEye className="icon" /> Unhide Profile
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  },
};

export default NewMatches;
