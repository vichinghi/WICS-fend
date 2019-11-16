import React, { Component } from 'react';
import Navbar from '../common/NavBar';
import { MDBBtn } from 'mdbreact';
import CrimeAreaCard from '../common/CrimeAreaCard';
import axios from 'axios';
import ModalDetails from '../common/ModalDetails';
import './AlertList.scss';

export const getList = () => {
  return axios({
    method: 'get',
    url: 'https://wics.herokuapp.com/incident',
    responseType: 'stream'
  })
    .then(res => res.data)
    .then(response => response);
};

export default class AlertList extends Component {
  state = {
    alerts: [],
    selected: {},
    isDialog: false
  };
  componentDidMount() {
    getList().then(data => {
      this.setState({ alerts: data.incidents });
    });
  }
  getModalData = selection => {
    console.log(selection);
    this.setState({ selected: selection });
    this.toggleModal();
  };
  toggleModal = () => {
    const { isDialog } = this.state;
    if (isDialog) {
      this.setState({ isDialog: false });
    } else {
      this.setState({ isDialog: true });
    }
  };
  // {body,title,id, onClick}
  render() {
    return (
      <div className="alerts">
        <Navbar />
        <h1>Alerts</h1>
        <div>
          <input
            type="text"
            id="search"
            name="search"
            onChange={this.onChange}
            placeholder="Search"
          />
          <br />
        </div>
        <div className="alert-list">
          {this.state.alerts.length ? (
            this.state.alerts.map(result => {
              return (
                <div key={result.id} className="col-md-6 my-1">
                  <CrimeAreaCard
                    what_happened={result.what_happened}
                    id={result.id}
                    key={result.id}
                    where_it_happend={result.where_it_happend}
                    website={result.website}
                    url={result.url}
                    onClick={this.getModalData}
                  ></CrimeAreaCard>
                </div>
              );
            })
          ) : (
            <h5>Loading ...</h5>
          )}
        </div>
        <ModalDetails
          open={this.state.isDialog}
          toggle={this.toggleModal}
          data={this.state.selected}
        />
        

        <MDBBtn  className="text-center">Download PDF</MDBBtn>
      </div>
    );
  }
}
