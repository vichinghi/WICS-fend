import React, { useState,useEffect } from 'react';
import './crimeAreas.scss'
import WrappedMap from './Map';
import CrimeAreaCard from '../common/CrimeAreaCard';
import {  getIncidence } from '../data';
import { MDBBtn } from 'mdbreact';
import Modal from '../common/Modal';
import {Link} from 'react-router-dom';
import Navbar from '../common/NavBar';

const CrimeAreas = () => {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=>{
        getIncidence().then((res)=>{
            setData(res)
        })
      },[]);

const getModalData = async ({id})=>{
    const newArray = await data.filter(function(result) {
        return result.id == id;
      });
      await setModalData(newArray)
      setOpen(!open)
}

    return (
        <div className="crime-areas">
            <Navbar/>
            <h3 className="head">Crime Areas</h3>
            <div className="map">
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp
                     &libraries=geometry,drawing,places&key=${`AIzaSyC2bnEImkMYXH2hC5sNrvFkaySOB6qfhz4`}`}
                    loadingElement={<div style={{ height: `100%`, }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    crimeData={data&&data}
                />
            </div>
            <div className="critical-alerts">
                <h4 className="header">Critical Alerts</h4>
                <div className="area-card">
                {data&&data.map((result)=>{
               return <CrimeAreaCard
               what_happened={result.what_happened}
                    id={result.id}
                    key={result.id}
                    where_it_happend={result.where_it_happend}
                    website={result.website}
                    url={result.url}
               onClick={getModalData}
               />
            })}
                </div>
                <div className="view-btn" >
                <MDBBtn  ><Link to="/alerts">View More</Link></MDBBtn>
                </div>

            </div>

            <Modal
            open={open}
            toggle={getModalData}
            data={modalData&&modalData[0]}
            />


        </div>
    )
}

export default CrimeAreas