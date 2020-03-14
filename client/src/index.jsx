/* eslint-disable comma-dangle */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.getFirstReservations();
  }

  //
  // eslint-disable-next-line class-methods-use-this
  getFirstReservations() {
    $.ajax({
      method: 'GET',
      url: './reservations',
      success: (data) => {
        console.log(data);
      },
      error: () => {}
    });
  }

  render() {
    return (
      <div>
        Hello From index.jsx
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
