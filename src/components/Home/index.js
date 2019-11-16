import React from 'react';
import "./home.scss"
import image from '../../Assets/images/logo.svg';
import Navbar from '../common/NavBar';

const Home =  ()=> {
      return (
        <React.Fragment>
            <div className="home">
              <Navbar/>
               <div className="center">
                <img className="image" src={image} alt="logo"></img>
                <p className ="subtitle">Wildlife Intelligent Crime Scanner</p>
              </div>        
            </div>
        </React.Fragment>
      );
}

  export default Home;
  