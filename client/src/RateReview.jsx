/* eslint-disable react/prop-types */
import React from 'react';

const RateReview = ({ rate, avg, total }) => (
  <div>
    <div id="rate">
      {`$${rate} per night`}
    </div>
    <div id="reviews">
      {`${avg}(${total} reviews)`}
    </div>
  </div>
);

export default RateReview;
