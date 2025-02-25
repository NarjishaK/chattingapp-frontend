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
