/* eslint-disable comma-dangle */
import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 0,
      children: 0,
      infants: 0
    };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
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

  render() {
    return (
      <div>
        <table className="guests">
          <tbody>
            <tr>
              <td>Adults</td>
              <td>
                <button type="button" name="adults" onClick={this.decrease}>-</button>
                {this.state.adults}
                <button type="button" name="adults" onClick={this.increase}>+</button>
              </td>
            </tr>
            <tr>
              <td>Children</td>
              <td>
                <button type="button" name="children" onClick={this.decrease}>-</button>
                {this.state.children}
                <button type="button" name="children" onClick={this.increase}>+</button>
              </td>
            </tr>
            <tr>
              <td>Infants</td>
              <td>
                <button type="button" name="infants" onClick={this.decrease}>-</button>
                {this.state.infants}
                <button type="button" name="infants" onClick={this.increase}>+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Guests;
