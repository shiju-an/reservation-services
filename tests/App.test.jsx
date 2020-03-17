/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// eslint-disable-next-line import/extensions
import App from '../client/src/App.jsx';

describe('App', () => {
  it('it should do something', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Hello From index.jsx');
  });
});
