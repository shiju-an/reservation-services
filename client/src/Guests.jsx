/* eslint-disable react/prop-types */
import React from 'react';


const Guests = ({
  decrease, increase, children, infants, adults
}) => (
  <div>
    <table className="guests">
      <tbody>
        <tr>
          <td>Adults</td>
          <td>
            <button type="button" name="adults" onClick={decrease}>-</button>
            {adults}
            <button type="button" name="adults" onClick={increase}>+</button>
          </td>
        </tr>
        <tr>
          <td>Children</td>
          <td>
            <button type="button" name="children" onClick={decrease}>-</button>
            {children}
            <button type="button" name="children" onClick={increase}>+</button>
          </td>
        </tr>
        <tr>
          <td>Infants</td>
          <td>
            <button type="button" name="infants" onClick={decrease}>-</button>
            {infants}
            <button type="button" name="infants" onClick={increase}>+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Guests;
