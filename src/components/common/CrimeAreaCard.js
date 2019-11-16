import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdbreact';

const CrimeAreaCard = ({ where_it_happend, what_happened, id, website, url, onClick }) => {
  return (
    <MDBCard style={{ width: '100%' }}>
      <MDBCardBody>
        <h4>Location</h4> 
        <p>{where_it_happend}</p> 
        <h4>Alert Details</h4> 
        <p>{what_happened}</p>
        <MDBCardText>
          <a href={url}>View Website</a>
        </MDBCardText>
        <MDBBtn id={id} href="#" onClick={()=>{onClick({id, where_it_happend, what_happened, id, website, url })}}>
          view
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CrimeAreaCard;
