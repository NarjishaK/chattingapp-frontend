import React from 'react'
import { Link } from 'react-router-dom'

const ViewProfileCards = () => {
  return (
    <div className="row mb-30">
        <div className="col-lg-4">
            <div className="dashboard-top-box rounded-bottom panel-bg">
                <div className="left">
                    <p>Following</p>
                    <Link to="#">View Following</Link>
                </div>
                <div className="right">
                    <span className="text-primary">200</span>
                    <div className="part-icon rounded">
                        <span><i className="fa-light fa-user"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-6 col-xs-12">
            <div className="dashboard-top-box rounded-bottom panel-bg">
                <div className="left">
                    <p>Follower</p>
                    <Link to="#">View Follower</Link>
                </div>
                <div className="right">
                    <span className="text-primary">123</span>
                    <div className="part-icon rounded">
                        <span><i className="fa-light fa-user"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-6 col-xs-12">
            <div className="dashboard-top-box rounded-bottom panel-bg">
                <div className="left">
                    <p>Pending Request</p>
                    <Link to="#">See Pending Request</Link>
                </div>
                <div className="right">
                    <span className="text-primary">5</span>
                    <div className="part-icon rounded">
                        <span><i className="fa-light fa-user"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewProfileCards