import React, { Component } from 'react';
import BarGraph from './BarGraph';
import './statistics.scss';
import PieChart from './PieChart';
import Navbar from '../common/NavBar';

export default class Statistics extends Component {
  render() {
    return (
      <div className="statistics">
        <Navbar/>
        <h1 className="text-center">Statistics</h1>
        <div className="graphs">
          <BarGraph className="graphs-bar"></BarGraph>
          <PieChart className="graphs-pie"></PieChart>
        </div>
      </div>
    );
  }
}
