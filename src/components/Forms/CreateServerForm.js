import React from "react";
import "./CreateServerForm.scss";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
export default function CreateServerForm() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <div className="header pt-3 peach-gradient header--custom">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  Create Server
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="data.id"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="data.type"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="protocol"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput label="address" group type="text" validate />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="indigo" type="submit">
                    Create
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
