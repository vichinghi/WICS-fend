import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const  Modal = ({open,toggle,data})=>{

  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}></MDBBtn>
      <MDBModal isOpen={open} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>{data&&data.where_it_happend}</MDBModalHeader>
        <MDBModalBody>
        {data&&data.what_happened}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          {/* <MDBBtn color="primary">Edit</MDBBtn> */}
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }

export default Modal;