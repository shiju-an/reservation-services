import React from 'react';

const Reservation = ({ rate, service, occupancy}) => (
  <div>
    <div>
      {`$${rate} x ${6} nights`}
      {` $${rate * 6}`}
    </div>
    <hr />
    <div>
    {`Service Fee $${service} `}
    </div>
    <hr />
    <div>
      {`Occupancy taxes and fees $${occupancy} `}
    </div>
    <hr />
    <form>
      <input type="submit" value="Reserve" />
    </form>
  </div>
);

export default Reservation;
