import React from 'react'
import { Link } from 'react-router-dom'

const UserActivity = () => {
  return (
    <div className="panel">
        <div className="panel-header">
            <h5>User Activities</h5>
            <div className="dropdown">
                <Link to="#" className="btn btn-sm btn-primary">{" "} +{" "} </Link>
            </div>
        </div>
        <div className="panel-body">
            <div className="user-activity">
                <ul>
                <li>
                        <div className="left">
                            <span className="user-activity-title">About Me</span>
                            <span className="user-activity-details">From "RuthDyer" UiDesign Leave From "RuthDyer" UiDesign Leave From It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</span>
                            <span className="user-activity-date">Monday 12 Jan 2020.</span>
                        </div>
                        <div className="right">
                            <span className="user-activity-time"></span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span className="user-activity-title">Higher Education</span>
                            <span className="user-activity-details">Graduated </span>
                            <span className="user-activity-date">Degree, 12 Jan 2020.</span>
                        </div>
                        <div className="right">
                            <span className="user-activity-time">1 year ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span className="user-activity-title">Profession</span>
                            <span className="user-activity-details">Software Developer</span>
                            <span className="user-activity-date"> Malappuram</span>
                        </div>
                        <div className="right">
                            <span className="user-activity-time">Present</span>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UserActivity