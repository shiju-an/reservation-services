/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
import React from 'react';
import $ from 'jquery';
import RateReview from './RateReview.jsx';
import Reservation from './Reservation.jsx';

const focalId = 7;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      rate: '',
      review_avg: '',
      total_review: '',
      service_fee: '',
      occupancy_tax: ''
    };
  }

  componentDidMount() {
    this.getFirstReservations();
    this.getLocation();
  }

  getFirstReservations() {
    $.ajax({
      method: 'GET',
      url: './reservations',
      data: { id: focalId },
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getLocation() {
    $.ajax({
      method: 'GET',
      url: '/location',
      data: { id: focalId },
      success: (data) => {
        console.log(data);
        this.setState({
          id: data[0].id,
          rate: data[0].rate,
          review_avg: data[0].review_avg,
          total_review: data[0].total_review,
          service_fee: data[0].service_fee,
          occupancy_tax: data[0].occupancy_tax
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div>
        <RateReview
          rate={this.state.rate}
          avg={this.state.review_avg}
          total={this.state.total_review}
        />
        <hr />
        <Reservation
          rate={this.state.rate}
          service={this.state.service_fee}
          occupancy={this.state.occupancy_tax}
        />
      </div>
    );
  }
}

export default App;
