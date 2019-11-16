import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

const CrimeAreaCard = ({body,title,id, onClick}) => {
  return (

      <MDBCard style={{ width: "100%" }}>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>
            {body}
          </MDBCardText>
          <MDBBtn id={id}href="#"onClick={onClick}>view</MDBBtn>
        </MDBCardBody>
      </MDBCard>
  )
}

export default CrimeAreaCard;
