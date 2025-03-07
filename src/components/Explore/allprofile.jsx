import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, fetchUsers } from '../Redux/handle-api';

export default function ECommerce() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="py-5">
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MDBContainer>
        <MDBRow className="g-4">
          {users.map((user, index) => (
            <MDBCol key={index} md="4" lg="4" xl="3">
              <MDBCard
                className="shadow-sm border-0 rounded-3"
                style={{
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <MDBCardBody className="p-4 text-dark">
                  <div className="d-flex justify-content-between align-items-center">
                    <MDBTypography
                      tag="h6"
                      className="text-uppercase text-muted"
                    >
                      {user.userId}
                    </MDBTypography>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <MDBCardImage
                      style={{ width: "70px", height: "70px" }}
                      className="img-fluid rounded-circle border border-1 border-primary"
                      src={
                        user.image
                          ? `${BASE_URL}/images/${user.image}`
                          : "https://www.w3schools.com/w3images/avatar2.png"
                      }
                      alt="Profile"
                    />

                    <div className="ms-3">
                      <p className="mb-1">
                        <strong>@{user.name}</strong>
                      </p>
                      <button
                        color="dark"
                        size="sm"
                        className="me-2"
                        style={{
                          borderRadius: "20px",
                          fontSize: "12px",
                          width: "100px",
                          height: "30px",
                          backgroundColor: "black",
                          color: "white",
                        }}
                      >
                        + Follow
                      </button>
                    </div>
                  </div>
                  <hr />
                  <button
                    color="success"
                    size="sm"
                    className="w-100"
                    style={{
                      backgroundColor: "#28a745",
                      borderRadius: "20px",
                      fontSize: "14px",
                      width: "100%",
                      height: "33px",
                      color: "white",
                      border: "none",
                    }}
                  >
                    <MDBIcon far icon="message me-2" /> Message
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
