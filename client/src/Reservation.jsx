import React from 'react';

const Reservation = ({ rate, service, occupancy, nights}) => (
  <div>
    <div>
      {`$${rate} x ${nights} nights`}
      {` $${rate * nights}`}
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
