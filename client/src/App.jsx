/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import moment from 'moment';
import RateReview from './RateReview.jsx';
import Reservation from './Reservation.jsx';
import Calendar from './calendar/Calendar.jsx';
import Guests from './Guests.jsx';

const focalId = 7;


const AppWrapper = styled.div`
  text-align: left;
  border: 0.5px solid grey;
  padding: 15px;
  width: 35%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      rate: '',
      review_avg: '',
      total_review: '',
      service_fee: '',
      occupancy_tax: '',
      calendarOpen: false,
      guestsOpen: false,
      checkIn: 'Check-in',
      checkOut: 'Checkout',
      adults: 0,
      children: 0,
      infants: 0,
      nights: 1
    };

    // bindings
    this.calendarPopUp = this.calendarPopUp.bind(this);
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
    this.updateCheckIn = this.updateCheckIn.bind(this);
    this.updateCheckOut = this.updateCheckOut.bind(this);
    this.updateNights = this.updateNights.bind(this);
  }

  increase(event) {
    const { name } = event.target;
    let newState = this.state[name] + 1;
    this.setState({
      [name]: newState
    });
    console.log('increase');
  }

  decrease(event) {
    const { name } = event.target;
    if (this.state[name] > 0) {
      let newState = this.state[name] - 1;
      this.setState({
        [name]: newState
      });
    }
    console.log('decreased');
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

  calendarPopUp() {
    this.setState({
      calendarOpen: !this.state.calendarOpen
    });
  }

  updateCheckIn(date){
    this.setState({
      checkIn: date
    })
  }

  updateCheckOut(date){
    this.setState({
      checkOut: date
    })
  }

  updateNights(){
    var dayIn = this.state.checkIn.split('/');

    var momentIn = moment([dayIn[2], dayIn[0], dayIn[1]]);

    var dayOut = this.state.checkOut.split('/');

    var momentOut = moment([dayOut[2], dayOut[0], dayOut[1]]);

    var difference = momentOut.diff(momentIn, 'days')
    console.log(difference);
    this.setState({
      nights: difference
    });
  }

  render() {
    return (
      <AppWrapper>
        <RateReview
          rate={this.state.rate}
          avg={this.state.review_avg}
          total={this.state.total_review}
        />
        <hr />
    <div  onClick={this.calendarPopUp}><span>{this.state.checkIn}</span> --> <span>{this.state.checkOut}</span></div>
        {this.state.calendarOpen ? <Calendar updateCheckIn={this.updateCheckIn} updateCheckOut={this.updateCheckOut} updateNights={this.updateNights} /> : null}
        <hr />
        <div>Guests</div>
    <div>{this.state.adults + this.state.infants + this.state.children} guest(s)</div>
          <Guests increase={this.increase} decrease={this.decrease} adults={this.state.adults} children={this.state.children} infants={this.state.infants}/>
        <hr />
        <Reservation
          rate={this.state.rate}
          service={this.state.service_fee}
          occupancy={this.state.occupancy_tax}
          nights={this.state.nights}
        />
      </AppWrapper>
    );
  }
}

export default App;
