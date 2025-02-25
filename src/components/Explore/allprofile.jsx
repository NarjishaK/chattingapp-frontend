import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

const cardData = [
  { title: "Exquisite hand henna tattoo", time: "3 hrs", price: "$90", username: "@sheisme", profileImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp", comments: "52 comments" },
  { title: "Custom Digital Portrait", time: "5 hrs", price: "$120", username: "@artbyme", profileImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp", comments: "34 comments" },
  { title: "Handmade Jewelry Set", time: "2 hrs", price: "$75", username: "@craftlover", profileImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-3.webp", comments: "27 comments" },
  { title: "Personalized Calligraphy", time: "4 hrs", price: "$85", username: "@inkart", profileImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-4.webp", comments: "40 comments" },
  { title: "Custom Tote Bags", time: "3 hrs", price: "$65", username: "@totequeen", profileImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-5.webp", comments: "21 comments" },
  { title: "Pottery Workshop", time: "6 hrs", price: "$150", username: "@clayworks", profileImg: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-6.webp", comments: "45 comments" },
];

export default function ECommerce() {
  return (
    <div className="py-5" style={{ backgroundColor: '#eee' }}>
      <MDBContainer>
        <MDBRow className="g-4">
          {cardData.map((card, index) => (
            <MDBCol key={index} md="6" lg="4">
              <MDBCard style={{ borderRadius: '15px', backgroundColor: '#b0c391' }}>
                <MDBCardBody className="p-4 text-black">
                  <div>
                    <MDBTypography tag='h6'>{card.title}</MDBTypography>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="small mb-0"><MDBIcon far icon="clock me-2" /> {card.time}</p>
                      <p className="fw-bold mb-0">{card.price}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: '70px' }}
                        className="img-fluid rounded-circle border border-dark border-3"
                        src={card.profileImg}
                        alt='Profile'
                        fluid />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-2">{card.username}</p>
                        <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <MDBIcon fas icon="star fa-xs" />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <MDBBtn outline color="dark" rounded size="sm">+ Follow</MDBBtn>
                        <MDBBtn outline color="dark" rounded size="sm">See profile</MDBBtn>
                        <MDBBtn outline color="dark" floating size="sm"><MDBIcon fas icon="comment" /></MDBBtn>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <MDBCardText>{card.comments}</MDBCardText>
                  <MDBBtn color="success" rounded block size="lg">
                    <MDBIcon far icon="clock me-2" /> Book now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
