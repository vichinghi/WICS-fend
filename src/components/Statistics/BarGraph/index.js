import React from 'react';
import { Bar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class BarGraph extends React.Component {
  state = {
   selectedIncident:"Poaching Incidences",
    dataBar: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ],
      datasets: [
        {
          label: 'Incidences',
          data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b'
          ],
          borderWidth: 2,
          borderColor: []
        },
        
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

  

  componentDidMount(){
   let i = 4;
   setInterval(() => {
    const newDataset = {
          label: 'Incidences',
          data: [12, 19, (i*6), (i+4), 2, 3, 12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b',
            '#28770b'
          ],
          borderWidth: 2,
          borderColor: []
        };
        i++;
    this.setState({dataBar: {datasets:[{...newDataset}]}})
   }, 2000);
  }

   onSelect = (event)=> {
   console.log(event.target.value);
   this.setState({selectedIncident:event.target.value})
  }

  render() {
    return (
      <MDBContainer className="graphs-bar">
        <div>
          <select className="browser-default custom-select" onChange={this.onSelect}>
            <option>Poaching Incidences</option>
            <option >Endangered Species Incidences</option>
            <option >Illegal Trade</option>
          </select>
        </div>
        <h4 className="text-center">{this.state.selectedIncident}</h4>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default BarGraph;
