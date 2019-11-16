import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class PieChart extends React.Component {
  state = {
    dataPie: {
      labels: ["Old Incidences", "New Incidences"],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: [
            "#28770b",
            "#f2c611",
          ],
          hoverBackgroundColor: [
          ]
        }
      ]
    }
  }

  componentDidMount(){
   let i = 4;
   setInterval(() => {
    const newDataset =    {
          data: [(i* 10), 50],
          backgroundColor: [
            "#28770b",
            "#f2c611",
          ],
          hoverBackgroundColor: [
          ]
        };
        i++;
    this.setState({dataPie: {datasets:[{...newDataset}]}})
   }, 2000);
  }

  render() {
    return (
      <MDBContainer className="graphs-pie">
        <h3 className="mt-5">Overall Summary</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default PieChart;