import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux/handle-api';




export default function ECommerce() {
  const dispatch = useDispatch();
const { users, loading, error } = useSelector((state) => state.auth);

useEffect(() => {
  dispatch(fetchUsers());
}, [dispatch]);
  return (
    <div className="py-5" style={{ backgroundColor: '#eee' }}>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <MDBContainer>
        <MDBRow className="g-4">
          {users.map((user, index) => (
            <MDBCol key={index} md="6" lg="4">
              <MDBCard style={{ borderRadius: '15px', backgroundColor: '#b0c391' }}>
                <MDBCardBody className="p-4 text-black">
                  <div>
                    <MDBTypography tag='h6'>{user.userId}</MDBTypography>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="small mb-0"><MDBIcon far icon="clock me-2" /> {user.state || "Unknown"}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: '70px' }}
                        className="img-fluid rounded-circle border border-dark border-3"
                        src={user.image ||"https://www.w3schools.com/w3images/avatar2.png"}
                        alt='Profile'
                        fluid />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-2">@{user.name}</p>
                        
                      </div>
                      <div>
                        <button  className="btn btn-primary btn-sm" style={{ backgroundColor: 'black' }}>+ Follow</button>
                        {/* <MDBBtn outline color="dark" rounded size="sm">See profile</MDBBtn> */}
                        <button  className="btn btn-primary btn-sm" style={{ backgroundColor: 'black' }}>Message <MDBIcon fas icon="comment" /></button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <button className="btn btn-primary btn-sm" style={{ backgroundColor: 'green',width:"100%" }}>
                    <MDBIcon far icon="clock me-2" /> View Now
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
